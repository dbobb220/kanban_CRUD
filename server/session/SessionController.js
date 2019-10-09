const User = require("../users/UserModel");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config;
const bcrypt = require("bcrypt");

exports.login = login = (req, res) => {
  let { username, password } = req.body;
  User.findOne({ username: username }, (err, user) => {
    if (username && bcrypt.compareSync(password, username.password)) {
      const timestamp = new Date().getTime();
      const userObj = { userId: user.id, iat: timestamp };
      const token = jwt.sign(userObj, `${process.env.PASS_KEY}`);
      res.send(token);
    } else {
      res.send("Unauthorized");
    }
  });
};
