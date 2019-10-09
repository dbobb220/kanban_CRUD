const express = require("express");
const router = express.Router();
const { login } = require("../controllers/SessionController");

router.post("/api/session", login);

module.exports = router;
