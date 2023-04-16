/* GET login view */
const login = (req, res) => {
    res.render('login', {
        title: 'Travlr Getaways'
    });
};

module.exports = {
    login
};