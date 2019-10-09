const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");

exports.auth = auth = (request, response, next) => {
  if (request.path.split("/")[1] !== "api") {
    return next();
  }
  // get the token from the header
  const tokenString = request.header("auth");
  if (!tokenString) {
    return response.send("Invalid credentials");
  }
  const tokenObject = jwt.verify(tokenString, process.env.PASS_KEY);
  // decrypt the token
  // find user by id
  User.findById(tokenObject.userId, function(err, user) {
    if (err) {
      return response.send("Error");
    }
    if (user) {
      request.user = user;
      return next();
    }
    return response.send("Invalid credentials");
  });
};
