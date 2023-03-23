const mongoose = require('mongoose');
const tips = mongoose.model('tips');

const fetchTips = async (req, res) => {
    if (!!req.params.tipCode) {
        try {
            res.json(await tips.findOne({ 'title': req.params.tipCode}));
        } catch (e) {
            res.status(404).send(`No tip found by the title ${req.params.tipCode}`);
        }
        return;
    }
    res.json(await tips.find({}));
};

module.exports = {
    fetchTips
};
