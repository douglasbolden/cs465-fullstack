const express = require('express');
const router = express.Router();
const controller = require('../controllers/latest-posts');

router.get('/:latestPostCode?', controller.fetchLatestPosts);

module.exports = router;