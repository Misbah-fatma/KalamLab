const Kit = require('../model/KitModel');
const cloudinary = require('../middlewares/cloudinary');

const addKit = async (req, res) => {
  const { name, description, category, price, popupText } = req.body;

  if (!name || !description || !category) {
    return res.status(400).json({ message: 'All fields except price, image, and pdf are required' });
  }

  let image = ""; // Placeholder for the Cloudinary image URL
  let pdf = ""; // Placeholder for the Cloudinary PDF URLs

  try {
    // Handle image upload
    if (req.files['image'] && req.files['image'].length > 0) {
      const imgFile = req.files['image'][0]; // Get the first (and only) image
      const img = await cloudinary.uploader.upload(imgFile.path);
      image = img.secure_url; // Cloudinary URL for the image
    }

    // Handle PDF upload
    if (req.files['pdf'] && req.files['pdf'].length > 0) {
      const pdfFiles = req.files['pdf'];
      const pdfUrls = await Promise.all(
        pdfFiles.map(async (file) => {
          const uploadedPdf = await cloudinary.uploader.upload(file.path, { resource_type: "raw" }); // PDF requires `resource_type: raw`
          return uploadedPdf.secure_url; // Cloudinary URL for the PDF
        })
      );
      pdf = pdfUrls.join(','); // Combine all URLs into a comma-separated string
    }

    // Create a new Kit document
    const newKit = new Kit({ name, description, category, image, price, popupText, pdf });
    await newKit.save();

    res.status(201).json({ message: 'Kit added successfully', kit: newKit });
  } catch (error) {
    console.error('Error uploading image/PDF or saving kit:', error);
    res.status(500).json({ message: 'Error adding kit', error });
  }
};

const getAllKits = async (req, res) => {
  try {
    const kits = await Kit.find();
    res.json(kits);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching kits', error });
  }
};

const updateKit = async (req, res) => {
  const { name, description, category, price, popupText } = req.body;
  const kitId = req.params.id;

  if (!name || !description || !category) {
    return res.status(400).json({ message: 'All fields except price, image, and pdf are required' });
  }

  let image = null; // Placeholder for the Cloudinary image URL (null means no image)
  let pdf = null; // Placeholder for the Cloudinary PDF URLs (null means no PDF)

  try {
    // Find the existing kit by ID
    const kit = await Kit.findById(kitId);
    if (!kit) {
      return res.status(404).json({ message: 'Kit not found' });
    }

    // Handle image upload (update the image if a new one is provided)
    if (req.files['image'] && req.files['image'].length > 0) {
      const imgFile = req.files['image'][0];
      const img = await cloudinary.uploader.upload(imgFile.path);
      image = img.secure_url; // Cloudinary URL for the image
    } else {
      // If no new image is uploaded, retain the existing image URL
      image = kit.image;
    }

    // Handle PDF upload (update PDFs if new ones are provided)
    if (req.files['pdf'] && req.files['pdf'].length > 0) {
      const pdfFiles = req.files['pdf'];
      const pdfUrls = await Promise.all(
        pdfFiles.map(async (file) => {
          const uploadedPdf = await cloudinary.uploader.upload(file.path, { resource_type: "raw" }); // PDF requires `resource_type: raw`
          return uploadedPdf.secure_url; // Cloudinary URL for the PDF
        })
      );
      pdf = pdfUrls.join(','); // Combine all URLs into a comma-separated string
    } else {
      // If no new PDFs are uploaded, retain the existing PDFs
      pdf = kit.pdf;
    }

    // Update the kit document
    kit.name = name || kit.name;
    kit.description = description || kit.description;
    kit.category = category || kit.category;
    kit.price = price || kit.price;
    kit.popupText = popupText || kit.popupText;
    kit.image = image;
    kit.pdf = pdf;

    // Save the updated kit
    await kit.save();

    res.status(200).json({ message: 'Kit updated successfully', kit });
  } catch (error) {
    console.error('Error updating kit:', error);
    res.status(500).json({ message: 'Error updating kit', error });
  }
};

const deleteKit = async (req, res) => {
  const kitId = req.params.id;

  try {
    // Delete the kit document by ID
    const deletedKit = await Kit.findByIdAndDelete(kitId);

    if (!deletedKit) {
      return res.status(404).json({ message: "Kit not found" });
    }

    res.status(200).json({ message: "Kit deleted successfully" });
  } catch (error) {
    console.error("Error deleting kit:", error);
    res.status(500).json({ message: "Error deleting kit", error });
  }
};

// Route for delete API




module.exports = { addKit, getAllKits, updateKit, deleteKit };

