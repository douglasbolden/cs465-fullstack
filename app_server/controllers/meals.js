const mongoose = require('mongoose');
const mealPosts = mongoose.model('meal-posts');

/* GET meals view */
const meals = async (req, res) => {
    res.render('meals', {
        title: 'Travlr Getaways',
        mealPosts: await mealPosts.find({})
    });
};

module.exports = {
    meals
};