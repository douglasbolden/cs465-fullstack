const mongoose = require('mongoose');

// Define the room schema
const roomsSchema = new mongoose.Schema({
    name: { type: String, required: true, index: true },
    description: { type: String, required: true },
    rate: { type: String, required: true },
    link: { type: String, required: true },
    image: { type: String, required: true }
});

mongoose.model('rooms', roomsSchema);