var express = require('express');
var router = express.Router();
const controller = require('../controllers/rooms');

/* GET home page. */
router.get('/', controller.rooms);

module.exports = router;
