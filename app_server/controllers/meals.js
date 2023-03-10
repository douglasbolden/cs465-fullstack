var fs = require('fs');
var mealposts = JSON.parse(fs.readFileSync('./data/meal-posts.json', 'utf8'));


/* GET meals view */
const meals = (req, res) => {
    res.render('meals', {
        title: 'Travlr Getaways',
        mealposts
    });
};

module.exports = {
    meals
};