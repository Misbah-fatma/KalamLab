const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  razorpay_order_id: {
    type: String,
    required: true,
  },
  razorpay_payment_id: {
    type: String,
    required: true,
  },
  razorpay_signature: {
    type: String,
    required: true, 
  },
  amount: {
    type: Number,
  },
  userName: {
    type: String,
  },
  email: {
    type: String,
  },
  address : [],
  courseName : {
    type: String,
  },
  pdfUrl: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  quantity : {
    type : Number
  },
  course: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
  }],

  Kit: { type: mongoose.Schema.Types.ObjectId, ref: 'Kit' }, 

});

module.exports = mongoose.model("Payment", paymentSchema);
