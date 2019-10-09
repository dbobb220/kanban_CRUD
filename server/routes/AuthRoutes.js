const express = require("express");
const { auth } = require("../controllers/AuthController");
const router = express.Router();

router.use(auth);

module.exports = router;
