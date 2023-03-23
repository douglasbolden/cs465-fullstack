const express = require('express');
const router = express.Router();
const controller = require('../controllers/rooms');

router.get('/:roomCode?', controller.fetchRooms);

module.exports = router;