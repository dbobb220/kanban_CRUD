const express = require("express");
const router = express.Router();
const { signup } = require("./UserController");

router.post("/users", signup);

module.exports = router;
