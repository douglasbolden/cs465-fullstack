const mongoose = require('mongoose');
const blogPosts = mongoose.model('blog-posts');

const fetchBlogPosts = async (req, res) => {
    if (!!req.params.blogCode) {
        try {
            res.json(await blogPosts.findOne({ 'title': req.params.blogCode}));
        } catch (e) {
            res.status(404).send(`No blog found for title: ${req.params.blogCode}`);
        }
        return;
    }
    res.json(await blogPosts.find({}));
};

module.exports = { 
    fetchBlogPosts
};
