const express = require('express');
const router = express.Router();
const {list, create, move} = require('./TaskController');

router.get('/tasks', list);
router.post('/tasks', create);
router.patch('/tasks/:taskId', move)

module.exports = router;
