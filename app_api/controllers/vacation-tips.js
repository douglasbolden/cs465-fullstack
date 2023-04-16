const mongoose = require('mongoose');
const tips = mongoose.model('vacation-tips');

const fetchTips = async (req, res) => {
    if (!!req.params.tipCode) {
        try {
            res.json(await tips.findOne({ 'code': req.params.tipCode}));
        } catch (e) {
            res.status(404).send(`No tip found for code ${req.params.tipCode}`);
        }
        return;
    }
    res.json(await tips.find({}));
};

const addTip = async (req, res) => {
    const newTip = req.body;

    if (!newTip) {
        // 400 BAD REQUEST error because no Tip was sent
        res.status(400).send('No tip record found in body of request');
        return;
    }

    try {
        const savedTip = await tips.create(newTip);

        // 201 CREATED response with the tip -- we send it back because it will have the MongoDB _id now
        res.status(201).json(savedTip);
    } catch (e) {
        //400 BAD REQUEST because we failed to create the tip
        res.status(400).json(e);
    }
};

const updateTip = async (req, res) => {
    const tipCode = req.params.tipCode;
    let tip = req.body;

    // The tipCode in /api/tips/:tipCode and the tipCode of the request body may not match...
    // Overwrite the one in the body with the one in the URL
    tip = Object.assign(tip, {tipCode});

    try {
        const updatedTip = await tips.findOneAndUpdate({'code': tipCode}, tip, {new: true});

        //null indicates no match was found...return 404 NOT FOUND
        if (updatedTip == null) {
            res.status(404).send({message: `No tip was found for code: ${tipCode}`});
            return;
        }

        res.status(200).json(updatedTip);
    } catch (e) {
        res.status(500).json(2);
    }
}

const deleteTip = async (req, res) => {
    try {
        if (!req.params.tipCode) {
            // If no :tipCode is provided, send a 400 BAD REQUEST error
            res.status(400).send(':tipCode is a required parameter');
            return;
        }

        //deleteOne() returns 1 if successful, 0 if not
        if ((await tips.deleteOne({ 'code': req.params.tipCode })) < 0) {
            //No tip was found with the :tipCode, return a 404 NOT FOUND error
            res.status(404).send(`No tip found with tipCode ${req.params.tipCode}`);
            return;
        }
        res.status(200).send();
    } catch (e) {
        res.status(500).json(e);
    }
};

module.exports = {
    fetchTips,
    addTip,
    updateTip,
    deleteTip
};