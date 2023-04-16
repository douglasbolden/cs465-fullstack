const mongoose = require('mongoose');
const trips = mongoose.model('trips');

/* GET travel view */
const travel = async (req, res) => {
    res.render('travel', {
        title: 'Travlr Getaways',
        trips: await trips.find({})
    });
};

module.exports = {
    travel
};