var fs = require('fs');
var blogposts = JSON.parse(fs.readFileSync('./data/blog-posts.json', 'utf8'));
var pages = JSON.parse(fs.readFileSync('./data/pages.json', 'utf8'));
var testimonials = JSON.parse(fs.readFileSync('./data/testimonials.json', 'utf8'));


/* GET homepage*/
const index = (req, res) => {
    res.render('index', { 
        title: 'Travlr Getaways',
        blogposts,
        pages,
        testimonials
    });
};

module.exports = {
    index
};