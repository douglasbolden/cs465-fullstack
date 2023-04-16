const mongoose = require('mongoose');
const newsPosts = mongoose.model('news-posts');

const fetchNewsPosts = async (req, res) => {
    if (!!req.params.newsCode) {
        try {
            res.json(await newsPosts.findOne({ 'code': req.params.newsCode}));
        } catch (e) {
            res.status(404).send(`No newsPost found for code ${req.params.newsCode}`);
        }
        return;
    }
    res.json(await newsPosts.find({}));
};

const addNewsPost = async (req, res) => {
    const newNewsPost = req.body;

    if (!newNewsPost) {
        // 400 BAD REQUEST error because no NewsPost was sent
        res.status(400).send('No newsPost record found in body of request');
        return;
    }

    try {
        const savedNewsPost = await newsPosts.create(newNewsPost);

        // 201 CREATED response with the newsPost -- we send it back because it will have the MongoDB _id now
        res.status(201).json(savedNewsPost);
    } catch (e) {
        //400 BAD REQUEST because we failed to create the newsPost
        res.status(400).json(e);
    }
};

const updateNewsPost = async (req, res) => {
    const newsCode = req.params.newsCode;
    let newsPost = req.body;

    // The newsCode in /api/newsPosts/:newsCode and the newsCode of the request body may not match...
    // Overwrite the one in the body with the one in the URL
    newsPost = Object.assign(newsPost, {newsCode});

    try {
        const updatedNewsPost = await newsPosts.findOneAndUpdate({'code': newsCode}, newsPost, {new: true});

        //null indicates no match was found...return 404 NOT FOUND
        if (updatedNewsPost == null) {
            res.status(404).send({message: `No newsPost was found for code: ${newsCode}`});
            return;
        }

        res.status(200).json(updatedNewsPost);
    } catch (e) {
        res.status(500).json(2);
    }
}

const deleteNewsPost = async (req, res) => {
    try {
        if (!req.params.newsCode) {
            // If no :newsCode is provided, send a 400 BAD REQUEST error
            res.status(400).send(':newsCode is a required parameter');
            return;
        }

        //deleteOne() returns 1 if successful, 0 if not
        if ((await newsPosts.deleteOne({ 'code': req.params.newsCode })) < 0) {
            //No newsPost was found with the :newsCode, return a 404 NOT FOUND error
            res.status(404).send(`No newsPost found with newsCode ${req.params.newsCode}`);
            return;
        }
        res.status(200).send();
    } catch (e) {
        res.status(500).json(e);
    }
};

module.exports = {
    fetchNewsPosts,
    addNewsPost,
    updateNewsPost,
    deleteNewsPost
};