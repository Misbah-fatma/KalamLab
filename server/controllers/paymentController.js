const instance = require("../server.js");
const crypto = require("crypto");
const Payment = require("../model/PaymentModel.js");
const User = require("../model/UserModel"); // Assuming you have a User model
const path = require('path');
const generateInvoicePDF = require('../generateInvoice'); 
const nodemailer = require('nodemailer');

require('dotenv').config();

// Function to send email using Nodemailer with PDF attachment
const sendInvoiceEmail = async (email, invoicePath) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Use environment variable for security
      pass: process.env.EMAIL_PASS, // Use environment variable for security
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Your Invoice',
    text: 'Please find attached your invoice.',
    attachments: [
      {
        filename: 'invoice.pdf',
        path: invoicePath,
        contentType: 'application/pdf',
      },
    ],
  };

  await transporter.sendMail(mailOptions);
};


module.exports.checkout = async (req, res) => {
  const { amount } = req.body;

  const options = {
    amount: Number(amount * 100), // Razorpay works with paise (100 paise = 1 INR)
    currency: "INR",
  };

  try {
    const order = await instance.orders.create(options);
    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};


const calculateGST = (amount, gstRate = 18) => {
  const gstAmount = (amount * gstRate) / 100; // Calculate GST amount
  const totalAmount = amount + gstAmount; // Total including GST
  return {
    amount,      // Base amount (excluding GST)
    gstAmount,   // GST amount
    totalAmount, // Total including GST
  };
};

module.exports.paymentVerification = async (req, res) => {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    userId,
    courseIds,
    amount,
    userName,
    email,
    address,
    courseName,
    quantity
  } = req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_APT_SECRET)
    .update(body.toString())
    .digest("hex");

  if (expectedSignature !== razorpay_signature) {
    console.log('Invalid signature detected during payment verification');
    return res.status(400).json({ success: false, message: 'Invalid signature' });
  }

  try {
    // Calculate GST on the base amount
    const { gstAmount, totalAmount } = calculateGST(amount);

    // Populate items array without adding GST as a separate item
    const items = [
      { item_name: courseName, item_price: Number(amount), quantity : quantity } // Only the base amount is listed
    ];

    // Generate a unique invoice number
    const invoiceNo = Date.now();

    // Generate PDF with the correct amount details
    const invoicePath = await generateInvoicePDF({
      customer_name: userName, 
      invoiceno: invoiceNo,
      address: email,
      Billing_Address : address,
      items, // Pass the course details as items
    });

    // Get the correct file path
    const fileUrl = path.resolve(invoicePath);

    // Save payment details to the database
    const paymentData = new Payment({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      user: userId,
      course: courseIds,
      amount: totalAmount, // Save the total amount (including GST)
      userName,
      email,
      courseName: courseName,
      pdfUrl: fileUrl, // Store the path to the PDF
    });

    // Ensure the payment is saved before proceeding
    const savedPayment = await paymentData.save();

    // Send invoice email with the PDF attached
    await sendInvoiceEmail(email, invoicePath);

    // Generate and save the invoice link
    const invoiceLink = `https://lms.advisionslab.com/api/fetch-pdf/${invoiceNo}`;
    savedPayment.invoiceLink = invoiceLink;
    await savedPayment.save();

    // Update user's purchased courses
    await User.findByIdAndUpdate(userId, { $addToSet: { purchasedCourses: { $each: courseIds } } });

    // Send response to the frontend
    return res.status(200).json({
      success: true,
      message: 'Payment verified and invoice link stored!',
      pdfUrl: invoiceLink, // Return the invoice link in the response
      paymentId: savedPayment._id,
      invoiceLink,
    });
  } catch (error) {
    console.log("Error during payment verification:", error);
    return res.status(500).json({ success: false, error: error.message });
  }
};
