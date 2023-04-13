const passport = require('passport');
const mongoose = require('mongoose');

const register = async (req, res) => {
    if (!req.body.name || !req.body.email || !req.body.password) {
        return res.status(400).json({'message': 'Name, email, and password are required'});
    }

    const user = new (mongoose.model('users'));
    user.name = req.body.name;
    user.email = req.body.email;
    user.setPassword(req.body.password);

    try {
        await user.save();
        const token = user.generateJwt();
        return res.status(200).json({token});
    } catch (e) {
        return res.status(400).json(e);
    }
};

const login = (req, res, next) => {
    if (!req.body.email || !req.body.password) {
        res.status(400).json({'message': 'Email and password are required'});
    }

    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return res.status(400).json(err);
        }

        if (!user) {
            return res.status(401).json(info);
        }
        const token = user.generateJwt();
        return res.status(200).json({token});
    })(req, res, next);
};

module.exports = {
    register,
    login
}
