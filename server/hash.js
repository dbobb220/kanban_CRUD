const bcrypt = require("bcrypt");

exports.hash = hash = (word, salts, done) => {
  console.log("hash started");
  bcrypt.hash(word, salts, (err, hash) => {
    return !err ? done(hash) : err(err);
  });
};

exports.compare = compare = (word, hashedWord, callback) => {
  bcrypt.compare(word, hashedWord, (err, res) => {
    return !err ? res : err;
  });
};
