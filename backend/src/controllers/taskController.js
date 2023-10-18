const tasksModel = require('../models/tasksModels');

const getAll = async (_request, response) => {
  const tasks = await tasksModel.getAll();
  return response.status (200).json(tasks);
};

const createTask = async (request, response) => {
  const createTask = await tasksModel.createdTask(request.body);
  return response.status(201).json(createTask);
};

const deleteTask = async (request, response) => {
  const {id} = request.params;

  await tasksModel.deleteTask(id);
  return response.status(204).json();
};

const updateTask = async (request, response) => {
  const { id } = request.params;

  await tasksModel.updateTask(id,request.body);
  return response.status(204).json();
};

module.exports = {
  getAll,
  createTask,
  deleteTask,
  updateTask,
};