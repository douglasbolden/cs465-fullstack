const mongoose = require('mongoose');

// Define the latest schema
const latestSchema = new mongoose.Schema({
    code: { type: String, required: true, index: true },
    title: { type: String, required: true, index: true },
    link: { type: String}
});

mongoose.model('latest-posts', latestSchema);