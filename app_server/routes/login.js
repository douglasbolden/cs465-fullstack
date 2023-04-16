var express = require('express');
var router = express.Router();
const controller = require('../controllers/login');

/* GET login page. */
router.get('/', controller.login);

module.exports = router;
