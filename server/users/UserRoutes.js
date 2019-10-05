const express = require('express');
const router = express.Router();
const {} = require('./UserController');

router.post('/users', create);

module.exports = router;
