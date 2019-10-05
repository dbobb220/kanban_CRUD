const User = require('./UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config;
const saltRounds = 8;

exports.signup = signup = (req, res) => {
    const {username, password, name} = req.body;
    User.findOne({username: username}, (err, existingUser) => {
        if(existingUser) {
            res.send('Username taken')
        } else {
            let hash = bcrypt.hash(password, 8);
            let userObject = {username:username, password:hash, name: name}
            let newUser = new User(userObject);
            newUser.save(()=>res.send('user saved'))
            const timestamp = new Date().getTime();
            const userObj = {userId: user.id, iat: timestamp}
            const token = jwt.sign(userObj, `${process.env.PASS_KEY}`)
            res.json(token)
        }
    })
}
