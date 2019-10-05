const express = require('express');
const router = express.Router();
const {login} = require('./SessionController');

router.post('/users', login);

module.exports = router;
