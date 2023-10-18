const express = require('express');

const router = express.Router ();

const tasksController = require ('.controllers/tasksController');
const tasksMiddleware = require ('/.middlewares/tasksmiddlewares');

router.get('/tasks', tasksController.getAll);
router.post('/tasks', tasksMiddleware.validateFieldTitle,tasksController.createTask);
router.delete('/task/:id', tasksMiddleware.tasksController.deleteTask);
router.put('/task/id', tasksMiddleware.validateFieldTitle, tasksMiddleware.validateFieldStatus, tasksController.updateTask);

module.exports = router;