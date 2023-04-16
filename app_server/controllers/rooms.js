const mongoose = require('mongoose');
const roomPosts = mongoose.model('rooms');

/* GET rooms view */
const rooms = async (req, res) => {
    res.render('rooms', {
        title: 'Travlr Getaways',
        roomPosts: await roomPosts.find({})
    });
};

module.exports = {
    rooms
};