const mongoose = require('mongoose');

// Define the blog post schema
const blogSchema = new mongoose.Schema({
    title: { type: String, required: true, index: true },
    link: { type: String},
    date: { type: Date, required: true },
    description: { type: String, required: true }
});

mongoose.model('blog-posts', blogSchema);