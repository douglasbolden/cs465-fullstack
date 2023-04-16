const mongoose = require('mongoose');
const rooms = mongoose.model('rooms');

const fetchRooms = async (req, res) => {
    if (!!req.params.roomCode) {
        try {
            res.json(await rooms.findOne({ 'code': req.params.roomCode}));
        } catch (e) {
            res.status(404).send(`No room found for code ${req.params.roomCode}`);
        }
        return;
    }
    res.json(await rooms.find({}));
};

const addRoom = async (req, res) => {
    const newRoom = req.body;

    if (!newRoom) {
        // 400 BAD REQUEST error because no Room was sent
        res.status(400).send('No room record found in body of request');
        return;
    }

    try {
        const savedRoom = await rooms.create(newRoom);

        // 201 CREATED response with the room -- we send it back because it will have the MongoDB _id now
        res.status(201).json(savedRoom);
    } catch (e) {
        //400 BAD REQUEST because we failed to create the room
        res.status(400).json(e);
    }
};

const updateRoom = async (req, res) => {
    const roomCode = req.params.roomCode;
    let room = req.body;

    // The roomCode in /api/rooms/:roomCode and the roomCode of the request body may not match...
    // Overwrite the one in the body with the one in the URL
    room = Object.assign(room, {roomCode});

    try {
        const updatedRoom = await rooms.findOneAndUpdate({'code': roomCode}, room, {new: true});

        //null indicates no match was found...return 404 NOT FOUND
        if (updatedRoom == null) {
            res.status(404).send({message: `No room was found for code: ${roomCode}`});
            return;
        }

        res.status(200).json(updatedRoom);
    } catch (e) {
        res.status(500).json(2);
    }
}

const deleteRoom = async (req, res) => {
    try {
        if (!req.params.roomCode) {
            // If no :roomCode is provided, send a 400 BAD REQUEST error
            res.status(400).send(':roomCode is a required parameter');
            return;
        }

        //deleteOne() returns 1 if successful, 0 if not
        if ((await rooms.deleteOne({ 'code': req.params.roomCode })) < 0) {
            //No room was found with the :roomCode, return a 404 NOT FOUND error
            res.status(404).send(`No room found with roomCode ${req.params.roomCode}`);
            return;
        }
        res.status(200).send();
    } catch (e) {
        res.status(500).json(e);
    }
};

module.exports = {
    fetchRooms,
    addRoom,
    updateRoom,
    deleteRoom
};