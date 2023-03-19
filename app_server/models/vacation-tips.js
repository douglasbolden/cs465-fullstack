const mongoose = require('mongoose');

// Define the tip schema
const tipSchema = new mongoose.Schema({
    title: { type: String, required: true, index: true },
    link: { type: String, required: true }
});

mongoose.model('vacation-tips', tipSchema);