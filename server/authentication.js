const User = require('./users/UserModel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config;


function authentication(req, res, next) {
    const token = request.header('token');
    try {
        const decode = jwt.verify(token, `${process.env.PASS_KEY}`);
        next();
    }
    catch {
        res.send('Unauthorized')
    }
}


exports.authentication = authentication;