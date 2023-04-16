const express = require('express');
const router = express.Router();
const controller = require('../controllers/news-posts');
const { expressjwt: jwt } = require('express-jwt');

const auth = jwt({ secret: process.env.JWT_SECRET, algorithms: ['HS512'] });

router.get('/:newsCode?', controller.fetchNewsPosts);
router.post('/', auth, controller.addNewsPost);
router.put('/:newsCode', auth, controller.updateNewsPost);
router.delete('/:newsCode', auth, controller.deleteNewsPost);

module.exports = router;