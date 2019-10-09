const bcrypt = require("bcrypt");

exports.hash = hash = (word, salts, done) => {
  console.log("hash started");
  bcrypt.hash(word, salts, (err, hash) => {
    return !err ? done(hash) : err(err);
  });
};

exports.compare = compare = (word, hashedWord, done) => {
  bcrypt.compare(word, hashedWord, done);
};
