const express = require('express');

const router = express.Router();

const tasksController = require('./controllers/taskController');

router.get('/tasks', tasksController.getAll);

module.exports = router;