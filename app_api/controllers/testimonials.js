const mongoose = require('mongoose');
const testimonials = mongoose.model('testimonials');

const fetchTestimonials = async (req, res) => {
    if (!!req.params.testimonialCode) {
        try {
            res.json(await testimonials.findOne({ 'code': req.params.testimonialCode}));
        } catch (e) {
            res.status(404).send(`No testimonial found for code ${req.params.testimonialCode}`);
        }
        return;
    }
    res.json(await testimonials.find({}));
};

const addTestimonial = async (req, res) => {
    const newTestimonial = req.body;

    if (!newTestimonial) {
        // 400 BAD REQUEST error because no Testimonial was sent
        res.status(400).send('No testimonial record found in body of request');
        return;
    }

    try {
        const savedTestimonial = await testimonials.create(newTestimonial);

        // 201 CREATED response with the testimonial -- we send it back because it will have the MongoDB _id now
        res.status(201).json(savedTestimonial);
    } catch (e) {
        //400 BAD REQUEST because we failed to create the testimonial
        res.status(400).json(e);
    }
};

const updateTestimonial = async (req, res) => {
    const testimonialCode = req.params.testimonialCode;
    let testimonial = req.body;

    // The testimonialCode in /api/testimonials/:testimonialCode and the testimonialCode of the request body may not match...
    // Overwrite the one in the body with the one in the URL
    testimonial = Object.assign(testimonial, {testimonialCode});

    try {
        const updatedTestimonial = await testimonials.findOneAndUpdate({'code': testimonialCode}, testimonial, {new: true});

        //null indicates no match was found...return 404 NOT FOUND
        if (updatedTestimonial == null) {
            res.status(404).send({message: `No testimonial was found for code: ${testimonialCode}`});
            return;
        }

        res.status(200).json(updatedTestimonial);
    } catch (e) {
        res.status(500).json(2);
    }
}

const deleteTestimonial = async (req, res) => {
    try {
        if (!req.params.testimonialCode) {
            // If no :testimonialCode is provided, send a 400 BAD REQUEST error
            res.status(400).send(':testimonialCode is a required parameter');
            return;
        }

        //deleteOne() returns 1 if successful, 0 if not
        if ((await testimonials.deleteOne({ 'code': req.params.testimonialCode })) < 0) {
            //No testimonial was found with the :testimonialCode, return a 404 NOT FOUND error
            res.status(404).send(`No testimonial found with testimonialCode ${req.params.testimonialCode}`);
            return;
        }
        res.status(200).send();
    } catch (e) {
        res.status(500).json(e);
    }
};

module.exports = {
    fetchTestimonials,
    addTestimonial,
    updateTestimonial,
    deleteTestimonial
};