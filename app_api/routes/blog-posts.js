const express = require('express');
const router = express.Router();
const controller = require('../controllers/blog-posts');
const { expressjwt: jwt } = require('express-jwt');

const auth = jwt({ secret: process.env.JWT_SECRET, algorithms: ['HS512'] });

router.get('/:blogCode?', controller.fetchBlogPosts);
router.post('/', auth, controller.addBlogPost);
router.put('/:blogCode', auth, controller.updateBlogPost);
router.delete('/:blogCode', auth, controller.deleteBlogPost);

module.exports = router;