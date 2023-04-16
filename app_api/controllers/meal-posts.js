const mongoose = require('mongoose');
const mealPosts = mongoose.model('meal-posts');

const fetchMealPosts = async (req, res) => {
    if (!!req.params.mealCode) {
        try {
            res.json(await mealPosts.findOne({ 'code': req.params.mealCode}));
        } catch (e) {
            res.status(404).send(`No mealPost found for code ${req.params.mealCode}`);
        }
        return;
    }
    res.json(await mealPosts.find({}));
};

const addMealPost = async (req, res) => {
    const newMealPost = req.body;

    if (!newMealPost) {
        // 400 BAD REQUEST error because no MealPost was sent
        res.status(400).send('No mealPost record found in body of request');
        return;
    }

    try {
        const savedMealPost = await mealPosts.create(newMealPost);

        // 201 CREATED response with the mealPost -- we send it back because it will have the MongoDB _id now
        res.status(201).json(savedMealPost);
    } catch (e) {
        //400 BAD REQUEST because we failed to create the mealPost
        res.status(400).json(e);
    }
};

const updateMealPost = async (req, res) => {
    const mealCode = req.params.mealCode;
    let mealPost = req.body;

    // The mealCode in /api/mealPosts/:mealCode and the mealCode of the request body may not match...
    // Overwrite the one in the body with the one in the URL
    mealPost = Object.assign(mealPost, {mealCode});

    try {
        const updatedMealPost = await mealPosts.findOneAndUpdate({'code': mealCode}, mealPost, {new: true});

        //null indicates no match was found...return 404 NOT FOUND
        if (updatedMealPost == null) {
            res.status(404).send({message: `No mealPost was found for code: ${mealCode}`});
            return;
        }

        res.status(200).json(updatedMealPost);
    } catch (e) {
        res.status(500).json(2);
    }
}

const deleteMealPost = async (req, res) => {
    try {
        if (!req.params.mealCode) {
            // If no :mealCode is provided, send a 400 BAD REQUEST error
            res.status(400).send(':mealCode is a required parameter');
            return;
        }

        //deleteOne() returns 1 if successful, 0 if not
        if ((await mealPosts.deleteOne({ 'code': req.params.mealCode })) < 0) {
            //No mealPost was found with the :mealCode, return a 404 NOT FOUND error
            res.status(404).send(`No mealPost found with mealCode ${req.params.mealCode}`);
            return;
        }
        res.status(200).send();
    } catch (e) {
        res.status(500).json(e);
    }
};

module.exports = {
    fetchMealPosts,
    addMealPost,
    updateMealPost,
    deleteMealPost
};