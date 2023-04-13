const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const users = mongoose.model('users');

passport.use(new LocalStrategy(
    // Tell Passport which user property is used as the username
    { usernameField: 'email' },

    // Provide Passport a function to use for validating users
    async (username, password, done) => {
        try {
            const user = await users.findOne({ email: username });

            // If no user matchs the e-mail, fail
            if (!user) {
                return done(null, false, { message: 'Unrecognized username' });
            }

            // Test the password
            if (!user.validatePassword(password)) {
                return done(null, false, { message: 'Incorrect password' });
            }

            // Everything passed, allow log in
            return done(null, user);
        } catch (e) {
            return done(e);
        }
    }
))
