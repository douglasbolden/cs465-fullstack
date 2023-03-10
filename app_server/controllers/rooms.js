var fs = require('fs');
var room = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf8'));


/* GET rooms view */
const rooms = (req, res) => {
    res.render('rooms', {
        title: 'Travlr Getaways',
        room
    });
};

module.exports = {
    rooms
};