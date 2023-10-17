const tasksModel = require('../models/tasksModels');

const getAll = async (request, Response) => {

  const tasks = await tasksModel.getAll();

  return Response.status(200).json (tasks);
};

module.exports = {
  getAll
};