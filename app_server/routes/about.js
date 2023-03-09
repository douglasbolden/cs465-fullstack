var express = require('express');
var router = express.Router();
const controller = require('../controllers/about');

/* GET home page. */
router.get('/', controller.about);

module.exports = router;
