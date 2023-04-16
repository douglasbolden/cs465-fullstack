const mongoose = require('mongoose');
const newsPosts = mongoose.model('news-posts');
const vacationTips = mongoose.model('vacation-tips');
const latestPosts = mongoose.model('latest-posts');

/* GET news view */
const news = async (req, res) => {
    res.render('news', {
        title: 'Travlr Getaways',
        news: await newsPosts.find({}),
        tips: await vacationTips.find({}),
        latest: await latestPosts.find({})
    });
};

module.exports = {
    news
};