/* GET news view */
const news = (req, res) => {
    res.render('news', {
        title: 'Travlr Getaways'
    });
};

module.exports = {
    news
};