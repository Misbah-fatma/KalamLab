const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'misbah7370@gmail.com',
      pass: 'nhof lijk pfda fmqf', 
    },
  });

  const mailOptions = {
    from: 'misbah7370@gmail.com',
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;