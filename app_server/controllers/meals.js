const mongoose = require('mongoose');
const meal = mongoose.model('meal-posts');

/* GET meals view */
const meals = async (req, res) => {
    res.render('meals', {
        title: 'Travlr Getaways',
        mealposts: await meal.find({})
    });
};

module.exports = {
    meals
};