const mongoose = require('mongoose');
const newsPosts = mongoose.model('news-posts');

const fetchNewsPosts = async (req, res) => {
    if (!!req.params.newsPostCode) {
        try {
            res.json(await newsPosts.findOne({ 'posterName': req.params.newsPostCode}));
        } catch (e) {
            res.status(404).send(`No news posts found for user: ${req.params.newsPostCode}`);
        }
        return;
    }
    res.json(await newsPosts.find({}));
};

module.exports = {
    fetchNewsPosts
};
