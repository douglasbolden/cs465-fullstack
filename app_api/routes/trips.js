const express = require('express');
const router = express.Router();
const controller = require('../controllers/trips');

router.get('/:tripCode?', controller.fetchTrips);
router.post('/', controller.addTrip);
router.put('/:tripCode', controller.updateTrip);
router.delete('/', controller.deleteTrip);

module.exports = router;