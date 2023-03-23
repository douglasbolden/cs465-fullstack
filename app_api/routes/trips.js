const express = require('express');
const router = express.Router();
const controller = require('../controllers/trips');

router.get('/:tripCode?', controller.fetchTrips);

module.exports = router;