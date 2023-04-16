var fs = require('fs');
var pages = JSON.parse(fs.readFileSync('./data/pages.json', 'utf8'));

const mongoose = require('mongoose');
const blogs = mongoose.model('blog-posts');
const testimonials = mongoose.model('testimonials');


/* GET homepage*/
const index = async (req, res) => {
    res.render('index', { 
        title: 'Travlr Getaways',
        blogs: await blogs.find({}),
        pages,
        testimonials: await testimonials.find({})
    });
};

module.exports = {
    index
};