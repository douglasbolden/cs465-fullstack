/* GET checkout view */
const checkout = (req, res) => {
    res.render('checkout', {
        title: 'Travlr Getaways'
    });
};

module.exports = {
    checkout
};