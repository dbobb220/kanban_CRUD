const express = require("express");
const router = express.Router();
const { signup } = require("../controllers/UserController");

router.post("/api/users", signup);

module.exports = router;
