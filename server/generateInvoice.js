const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

const generateInvoicePDF = async ({ customer_name, invoiceno, address, Billing_Address, items }) => {
  console.log("Generating Invoice with Data:", { customer_name, invoiceno, address, Billing_Address, items });

  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({ size: 'A4', margin: 50 });
      const invoiceDir = path.join(__dirname, 'invoices');

      if (!fs.existsSync(invoiceDir)) {
        fs.mkdirSync(invoiceDir);
      }

      const invoicePath = path.join(invoiceDir, `${invoiceno}.pdf`);
      const writeStream = fs.createWriteStream(invoicePath);
      doc.pipe(writeStream);

      const fontPath = path.join(__dirname, 'NotoSans-Regular.ttf');
      if (fs.existsSync(fontPath)) {
        doc.font(fontPath);
      }

      const logoPath = path.join(__dirname, 'logo10.png');
      if (fs.existsSync(logoPath)) {
        doc.image(logoPath, 50, 60, { width: 80 });
      }

      doc.fontSize(16).fillColor('#333')
        .text('ADVISIONS RESEARCH AND DEVELOPMENT PTD LTD', 150, 45)
        .fontSize(10)
        .text('Gayatri Enclave, Under Flyover NH58, Manglour, Roorkee, Haridwar - 247656, Uttarakhand, India', 150, 70, { width: 400 })
        .moveDown(6.5)
        .text('GSTIN: 05AAXCA7784M1ZN', 150, 100);

      doc.fontSize(12)
        .text(`Invoice Receipt: ${invoiceno}`, 50, 140)
        .fontSize(12)
        .fillColor('#d9534f')
        .text(`AMOUNT Paid ₹ ${items.reduce((acc, item) => acc + item.item_price, 0).toFixed(2)}`, 400, 140, { align: 'right' });


      doc.fontSize(10).fillColor('black')
        .text(`Issue Date: ${new Date().toLocaleDateString()}`, 50, 170)
        .text(`Billing Address:`, 50, 200)
        .text(`${Billing_Address.street}`, 50, 215)
        .text(`${Billing_Address.city}, ${Billing_Address.state}, ${Billing_Address.zip}`, 50, 230)
        .text(`${Billing_Address.country}`, 50, 245)
        .text(`Name: ${customer_name}`, 400, 170, { align: 'right' })
        .text(`Email: ${address}`, 400, 185, { align: 'right' });

      doc.moveDown(1);

      const tableTop = 280;
      doc.rect(50, tableTop, 500, 20).fill('#f2f2f2').stroke();
      doc.fontSize(10).fillColor('#333')
        .text('DESCRIPTION', 60, tableTop + 5)
        .text('QTY', 300, tableTop + 5)
        .text('UNIT PRICE', 380, tableTop + 5)

        .text('AMOUNT', 480, tableTop + 5);

      let y = tableTop + 30;
      items.forEach(item => {
        doc.fontSize(10)
          .text(item.item_name, 60, y)
          .text(item.quantity, 300, y)
          .text(`₹ ${item.item_price.toFixed(2)}`, 380, y)
          .text(`₹ ${(item.item_price * item.quantity).toFixed(2)}`, 480, y);
        y += 20;
      });

      const subtotal = items.reduce((acc, item) => acc + item.item_price * item.quantity, 0);
    
      const totalIncludingGST = subtotal ;

      y += 10;
      doc.fontSize(10)
        .text('Sub Total', 380, y)
        .text(`₹ ${subtotal.toFixed(2)}`, 480, y);
      y += 20;

      doc.fontSize(12).fillColor('black').text('Total Amount', 380, y)
        .text(`₹ ${totalIncludingGST.toFixed(2)}`, 480, y);


      doc.save();
      doc.rotate(-45, { origin: [130, 500] });
      doc.fontSize(65)
        .fillColor('gray')
        .opacity(0.1)
        .text('AdvisionsLAB', 130, 500, { align: 'center' });
      doc.restore();

      // Add Important Points Above Footer
      const pointsTop = 600; // Adjust Y-coordinate to position points above the footer
      doc.fontSize(10)
        .fillColor('black')
        .text('1. Payment is due within 15 days from the issue date of this invoice.', 50, pointsTop)
        .text('2. Late payments may incur additional charges.', 50, pointsTop + 15)
        .text('3. All services provided are non-refundable.', 50, pointsTop + 30)
        .text('4. The 5 Days Return Policy applies only to physical goods, excluding digital products and services.', 50, pointsTop + 45)
        .text('5. Advisions Research and Development Private Limited reserves the right to make changes to these terms and conditions at any time without prior notice.', 50, pointsTop + 60);

      // Add Footer Contact Information
      doc.fontSize(10)
        .fillColor('black')
        .text('Thank you for your business!', 50, 750, { align: 'center' })
        .text('Contact us at: info@advisionslab.com | +91 8810316395', { align: 'center' });


      // Finalize the PDF
      doc.end();

      writeStream.on('finish', () => {
        resolve(invoicePath);
      });

      writeStream.on('error', (err) => {
        reject(err);
      });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = generateInvoicePDF;
