const mongoose = require('mongoose');
const latestPosts = mongoose.model('latest-posts');

const fetchLatestPosts = async (req, res) => {
    if (!!req.params.latestCode) {
        try {
            res.json(await latestPosts.findOne({ 'code': req.params.latestCode}));
        } catch (e) {
            res.status(404).send(`No latestPost found for code ${req.params.latestCode}`);
        }
        return;
    }
    res.json(await latestPosts.find({}));
};

const addLatestPost = async (req, res) => {
    const newLatestPost = req.body;

    if (!newLatestPost) {
        // 400 BAD REQUEST error because no LatestPost was sent
        res.status(400).send('No latestPost record found in body of request');
        return;
    }

    try {
        const savedLatestPost = await latestPosts.create(newLatestPost);

        // 201 CREATED response with the latestPost -- we send it back because it will have the MongoDB _id now
        res.status(201).json(savedLatestPost);
    } catch (e) {
        //400 BAD REQUEST because we failed to create the latestPost
        res.status(400).json(e);
    }
};

const updateLatestPost = async (req, res) => {
    const latestCode = req.params.latestCode;
    let latestPost = req.body;

    // The latestCode in /api/latestPosts/:latestCode and the latestCode of the request body may not match...
    // Overwrite the one in the body with the one in the URL
    latestPost = Object.assign(latestPost, {latestCode});

    try {
        const updatedLatestPost = await latestPosts.findOneAndUpdate({'code': latestCode}, latestPost, {new: true});

        //null indicates no match was found...return 404 NOT FOUND
        if (updatedLatestPost == null) {
            res.status(404).send({message: `No latestPost was found for code: ${latestCode}`});
            return;
        }

        res.status(200).json(updatedLatestPost);
    } catch (e) {
        res.status(500).json(2);
    }
}

const deleteLatestPost = async (req, res) => {
    try {
        if (!req.params.latestCode) {
            // If no :latestCode is provided, send a 400 BAD REQUEST error
            res.status(400).send(':latestCode is a required parameter');
            return;
        }

        //deleteOne() returns 1 if successful, 0 if not
        if ((await latestPosts.deleteOne({ 'code': req.params.latestCode })) < 0) {
            //No latestPost was found with the :latestCode, return a 404 NOT FOUND error
            res.status(404).send(`No latestPost found with latestCode ${req.params.latestCode}`);
            return;
        }
        res.status(200).send();
    } catch (e) {
        res.status(500).json(e);
    }
};

module.exports = {
    fetchLatestPosts,
    addLatestPost,
    updateLatestPost,
    deleteLatestPost
};