const mongoose = require('mongoose');

const KitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: false },
  image: { type: String },
  additionalImages: { type: [String], default: [] }, // Array for additional images
  overview: { type: String }, // Optional field for overview
  title: { type: String },
  popupText: String,
  pdf : String
});

module.exports = mongoose.model('Kit', KitSchema);
