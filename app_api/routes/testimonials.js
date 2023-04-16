const express = require('express');
const router = express.Router();
const controller = require('../controllers/testimonials');
const { expressjwt: jwt } = require('express-jwt');

const auth = jwt({ secret: process.env.JWT_SECRET, algorithms: ['HS512'] });

router.get('/:testimonialCode?', controller.fetchTestimonials);
router.post('/', auth, controller.addTestimonial);
router.put('/:testimonialCode', auth, controller.updateTestimonial);
router.delete('/:testimonialCode', auth, controller.deleteTestimonial);

module.exports = router;