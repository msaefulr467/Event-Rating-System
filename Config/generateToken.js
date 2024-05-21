const jwt = require('jsonwebtoken');
const config = require('./config');

const generateToken = (user) => {
    const payload = {
        id: user.id,
        username: user.username
    };

    const token = jwt.sign(payload, config.secret, {
        expiresIn: config.tokenExpiration
    });

    return token;
};

module.exports = generateToken;
