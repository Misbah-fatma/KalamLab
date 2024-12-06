const express = require('express');
const { addKit, getAllKits, updateKit, deleteKit } = require('../controllers/kitController');

const router = express.Router();

const upload = require("../middlewares/multer");
const cloudinary=require('../middlewares/cloudinary');

// Routes
router.post("/fill", upload.fields([
    { name: "image", maxCount: 1 },  // Handle single image upload
    { name: "pdf", maxCount: 10 },  // Handle multiple PDF uploads
  ]), addKit); // Use upload middleware here
  
  router.get("/details", getAllKits);


  router.put("/update/:id", upload.fields([
    { name: "image", maxCount: 1 },  // Handle single image upload
    { name: "pdf", maxCount: 10 },   // Handle multiple PDF uploads
  ]), updateKit);

  router.delete('/delete/:id', deleteKit);
  


  module.exports = router;

