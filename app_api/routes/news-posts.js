const express = require('express');
const router = express.Router();
const controller = require('../controllers/news-posts');

router.get('/:newsPostCode?', controller.fetchNewsPosts);

module.exports = router;