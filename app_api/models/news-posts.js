const mongoose = require('mongoose');

// Define the news schema
const newsSchema = new mongoose.Schema({
    image: { type: String, required: true },
    postTitle: { type: String, required: true, index: true },
    postDate: { type: Date, required: true },
    posterName: { type: String, required: true, index: true },
    postData: { type: String, required: true }
});

mongoose.model('news-posts', newsSchema);