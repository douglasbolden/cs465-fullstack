var fs = require('fs');
var newsposts = JSON.parse(fs.readFileSync('./data/news-posts.json', 'utf8'));
var vacationTips = JSON.parse(fs.readFileSync('./data/vacation-tips.json', 'utf8'));
var latest = JSON.parse(fs.readFileSync('./data/latest-posts.json', 'utf8'));

/* GET news view */
const news = (req, res) => {
    res.render('news', {
        title: 'Travlr Getaways',
        newsposts,
        vacationTips,
        latest
    });
};

module.exports = {
    news
};