const jwt = require("jsonwebtoken");

exports.tokenForUser = tokenForUser = user => {
  const timestamp = new Date().getTime();
  return jwt.sign({ user: user.id }, process.env.PASS_KEY);
};
