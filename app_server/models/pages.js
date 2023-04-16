const mongoose = require('mongoose');

// Define the page schema
const pagesSchema = new mongoose.Schema({
    image: { type: String, required: true },
    link: { type: String}
});

mongoose.model('pages', pagesSchema);