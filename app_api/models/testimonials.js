const mongoose = require('mongoose');

// Define the testimonial schema
const testimonialSchema = new mongoose.Schema({
    description: { type: String, required: true },
    person: { type: String, required: true, index: true },
    userLink: { type: String}
});

mongoose.model('testimonials', testimonialSchema);