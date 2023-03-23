const express = require('express');
const router = express.Router();
const controller = require('../controllers/testimonials');

router.get('/:testimonialCode?', controller.fetchTestimonials);

module.exports = router;