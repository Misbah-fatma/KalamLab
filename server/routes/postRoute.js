const express = require('express');
const router = express.Router();
const upload = require("../middlewares/multer");
const cloudinary=require('../middlewares/cloudinary');
const Post = require('../model/PostModel');



router.post('/', upload.single('image'), async (req, res) => {
    try {
        const { title, description } = req.body;
        const file = req.file;

        if (!file) {
            return res.status(400).json({ error: 'No image file provided' });
        }

        // Upload image to Cloudinary
        const uploadResult = await cloudinary.uploader.upload(file.path);

        const imageUrl = uploadResult.secure_url;

        // Save post to database
        const post = new Post({ title, description, imageUrl });
        await post.save();

        res.status(201).json({ success: true, post });
    } catch (err) {
        res.status(500).json({ error: 'Something went wrong', details: err.message });
    }
});

router.get('/details', async (req, res) => {
    try {
        const posts = await Post.find(); // Fetch all posts
        res.status(200).json({ success: true, posts });
    } catch (err) {
        res.status(500).json({ error: 'Something went wrong', details: err.message });
    }
});


module.exports = router;
