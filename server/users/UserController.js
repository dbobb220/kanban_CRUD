const User = require("./UserModel");
const hash = require("../hash").hash;
const tokenForUser = require("../token").tokenForUser;

exports.signup = signup = (req, res, next) => {
  const { name, username, password } = req.body;
  const u = username;
  if (!username || !password) {
    return res.status(422).json({ error: "Username and password required" });
  }
  User.findOne({ username: u })
    .exec()
    .then(existingUser => {
      // If the user exist return an error on sign up
      if (existingUser) {
        console.log("This username is already being used");
        return res.status(422).json({ error: "Username is in use" });
      }
      console.log("This username is free to use");
      saveUser(name, username, password, token => {
        res.json(token);
      });
    });
};

let saveUser = (name, username, password, done) => {
  console.log("save user started");
  hash(password, 10, function(hashedPassword) {
    const user = new User({
      name: name,
      username: username,
      password: hashedPassword
    });
    console.log("Saving the user");
    user.save((err, user) => {
      return !err ? done({ token: tokenForUser(user) }) : done({ err: err });
    });
  });
};
