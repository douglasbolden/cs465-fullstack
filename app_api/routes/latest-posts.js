const express = require('express');
const router = express.Router();
const controller = require('../controllers/latest-posts');
const { expressjwt: jwt } = require('express-jwt');

const auth = jwt({ secret: process.env.JWT_SECRET, algorithms: ['HS512'] });

router.get('/:latestCode?', controller.fetchLatestPosts);
router.post('/', auth, controller.addLatestPost);
router.put('/:latestCode', auth, controller.updateLatestPost);
router.delete('/:latestCode', auth, controller.deleteLatestPost);

module.exports = router;