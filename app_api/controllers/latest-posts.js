const mongoose = require('mongoose');
const latestPosts = mongoose.model('latest-posts');

const fetchLatestPosts = async (req, res) => {
    if (!!req.params.latestPostCode) {
        try {
            res.json(await latestPosts.findOne({ 'title': req.params.latestPostCode}));
        } catch (e) {
            res.status(404).send(`No latestPost found for title: ${req.params.latestPostCode}`);
        }
        return;
    }
    res.json(await latestPosts.find({}));
};

module.exports = {
    fetchLatestPosts
};
