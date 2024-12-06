const express = require("express");
const {
  checkout,
  paymentVerification,
  viewInvoice
} =  require("../controllers/paymentController.js");
const Payment  =require('../model/PaymentModel.js');
const { requireLogin } = require("../middlewares/requireLogin.js");
const Course = require("../model/CourseModel.js");
const Kit = require("../model/KitModel.js");
const User = require("../model/UserModel.js")

const router = express.Router();

router.route("/checkout").post(checkout);

router.route("/paymentverification").post(paymentVerification);

router.get('/fetch-pdf/:paymentId', async (req, res) => {
  const { paymentId } = req.params;

  try {
    // Fetch payment details from the database
    const payment = await Payment.findById(paymentId);
    if (!payment || !payment.pdfUrl) {
      return res.status(404).send('Invoice not found');
    }

    // Assuming pdfUrl is a path on your server
    const filePath = path.resolve(payment.pdfUrl);

    res.download(filePath, 'invoice.pdf', (err) => {
      if (err) {
        console.error('Error sending invoice:', err);
        res.status(500).send('Error downloading invoice');
      }
    });
  } catch (error) {
    console.error('Error fetching invoice:', error);
    res.status(500).send('Server error');
  }
});


router.get('/purchased-courses', requireLogin, async (req, res) => {
  if (!req.user) {
    return res.status(401).json({ success: false, error: "User not authenticated" });
  }

  const userId = req.user._id;

  try {
    const payments = await Payment.find({ user: userId });

    // Fetch associated data dynamically
    const purchasedCourses = await Promise.all(
      payments.map(async (payment) => {
        // Try to populate as a Course
        const course = await Course.findById(payment.course);
        if (course) {
          return { type: 'Course', data: course };
        }

        // If not a Course, try to populate as a Kit
        const kit = await Kit.findById(payment.course);
        if (kit) {
          return { type: 'Kit', data: kit };
        }

        return null; // If neither, return null
      })
    );

    // Filter out null entries
    const validEntries = purchasedCourses.filter((item) => item !== null);

    res.status(200).json({
      success: true,
      courses: validEntries,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
})

// Fetch specific data
router.get('/all-purchased', async (req, res) => {
  try {
    const payments = await Payment.find(); // Fetch all payments

    // Fetch associated data dynamically for each payment
    const purchasedItems = await Promise.all(
      payments.map(async (payment) => {
        const results = [];

        // Include username, email, and payment ID
        const userDetails = {
          userName: payment.userName,
          email: payment.email,
          paymentId: payment.razorpay_payment_id,
          amount : payment.amount
        };

   
          const course = await Course.findById(payment.course);
          if (course) {
            return({
              type: 'Course',
              data: course,
              userDetails: userDetails, // Include user info
            });
          } else {
            console.log(`Course with ID ${payment.course} not found.`);
          }
        
          const kit = await Kit.findById(payment.course);
          if (kit) {
            return({
              type: 'Kit',
              data: kit,
              userDetails: userDetails, // Include user info
            });
          } else {
            console.log(`Kit with ID ${payment.Kit} not found.`);
          }
        

        return results;
      })
    );

    // Flatten the results array and filter out any null entries
    const validEntries = purchasedItems.flat().filter((item) => item !== null);

    console.log('Fetched Items:', validEntries); // Debug log for both Course and Kit data

    res.status(200).json({
      success: true,
      items: validEntries,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
});


module.exports = router;