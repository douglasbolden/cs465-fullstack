const mongoose = require('mongoose');
const testimonials = mongoose.model('testimonials');

const fetchTestimonials = async (req, res) => {
    if (!!req.params.testimonialCode) {
        try {
            res.json(await testimonials.findOne({ 'person': req.params.testimonialCode}));
        } catch (e) {
            res.status(404).send(`No testimonial found that was edited by ${req.params.testimonialCode}`);
        }
        return;
    }
    res.json(await testimonials.find({}));
};

module.exports = {
    fetchTestimonials
};
