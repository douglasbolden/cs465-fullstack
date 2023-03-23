const mongoose = require('mongoose');
const room = mongoose.model('rooms');

/* GET rooms view */
const rooms = async (req, res) => {
    res.render('rooms', {
        title: 'Travlr Getaways',
        room: await room.find({})
    });
};

module.exports = {
    rooms
};