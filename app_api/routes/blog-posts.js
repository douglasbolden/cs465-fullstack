const express = require('express');
const router = express.Router();
const controller = require('../controllers/blog-posts');

router.get('/:blogCode?', controller.fetchBlogPosts);

module.exports = router;