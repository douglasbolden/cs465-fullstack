const mongoose = require('mongoose');
const mealPosts = mongoose.model('meal-posts');

const fetchMealPosts = async (req, res) => {
    if (!!req.params.mealPostCode) {
        try {
            res.json(await mealPosts.findOne({ 'mealName': req.params.mealPostCode}));
        } catch (e) {
            res.status(404).send(`No meal found by the name of ${req.params.mealPostCode}`);
        }
        return;
    }
    res.json(await mealPosts.find({}));
};

module.exports = {
    fetchMealPosts
};
