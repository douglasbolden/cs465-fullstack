const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const exp = require('constants');

const userSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true},
    name: { type: String, required: true },
    hash: String,
    salt: String
});

userSchema.methods.setPassword = function(password) {
    this.salt = crypto.randomBytes(16);
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

userSchema.methods.validatePassword = function(password) {
    const hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return this.hash == hash;
};

userSchema.methods.generateJwt = function() {
    // 7 days in the future
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);

    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            name: this.name,
            exp: expiry.getTime() / 1000
        },
        process.env.JWT_SECRET,
        { algorithm: 'HS512' }
    )
}

mongoose.model('users', userSchema);
