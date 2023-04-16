var express = require('express');
var router = express.Router();
const controller = require('../controllers/checkout');

/* GET checkout page. */
router.get('/', controller.checkout);

module.exports = router;
