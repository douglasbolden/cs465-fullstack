const mongoose = require('mongoose');
const trips = mongoose.model('trips');

const fetchTrips = async (req, res) => {
    if (!!req.params.tripCode) {
        try {
            res.json(await trips.findOne({ 'code': req.params.tripCode}));
        } catch (e) {
            res.status(404).send(`No trip found for code ${req.params.tripCode}`);
        }
        return;
    }
    res.json(await trips.find({}));
};

const addTrip = async (req, res) => {
    const newTrip = req.body;

    if (!newTrip) {
        // 400 BAD REQUEST error because no Trip was sent
        res.status(400).send('No trip record found in body of request');
        return;
    }

    try {
        const savedTrip = await trips.create(newTrip);

        // 201 CREATED response with the trip -- we send it back because it will have the MongoDB _id now
        res.status(201).json(savedTrip);
    } catch (e) {
        //400 BAD REQUEST because we failed to create the trip
        res.status(400).json(e);
    }
};

const updateTrip = async (req, res) => {
    const tripCode = req.params.tripCode;
    let trip = req.body;

    // The tripCode in /api/trips/:tripCode and the tripCode of the request body may not match...
    // Overwrite the one in the body with the one in the URL
    trip = Object.assign(trip, {tripCode});

    try {
        const updatedTrip = await trips.findOneAndUpdate({'code': tripCode}, trip, {new: true});

        //null indicates no match was found...return 404 NOT FOUND
        if (updatedTrip == null) {
            res.status(404).send({message: `No trip was found for code: ${tripCode}`});
            return;
        }

        res.status(200).json(updatedTrip);
    } catch (e) {
        res.status(500).json(2);
    }
}

const deleteTrip = async (req, res) => {
    try {
        if (!req.params.tripCode) {
            // If no :tripCode is provided, send a 400 BAD REQUEST error
            res.status(400).send(':tripCode is a required parameter');
            return;
        }

        //deleteOne() returns 1 if successful, 0 if not
        if ((await trips.deleteOne({ 'code': req.params.tripCode })) < 0) {
            //No trip was found with the :tripCode, return a 404 NOT FOUND error
            res.status(404).send(`No trip found with tripCode ${req.params.tripCode}`);
            return;
        }
        res.status(200).send();
    } catch (e) {
        res.status(500).json(e);
    }
};

module.exports = {
    fetchTrips,
    addTrip,
    updateTrip,
    deleteTrip
};