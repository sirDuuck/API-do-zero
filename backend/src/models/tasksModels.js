const connection = require('./connection');

const getAll = async () => {
  const [tasks] = await connection.execute('SELECT * FROM tasks');
  return tasks;
};

const createTask = async (task) => {
  const { title } = task;
  const dateUTC = new Date (Date.now ()).toUTCString();

  const query = 'INSERT INTO task(title, status, created_at) VALUES (?, ?, ?)';

  const [createTask] = await connection.execute (query, [title, 'pendente', dateUTC]);
  return {insertId: createTask.insertId};
};

const deleteTask = async (id) => {
  const [removedTask] = await connection.execute('DELETE FROM tasks WHERE id = ?', [id]);
  return removedTask;
};

const updateTask = async (id, task) => {
  const query = 'UPDATE tasks SET title = ?, status= ? WHERE id= ?';

  const { title, status} = task;

  const [updateTask] = await connection.execute (query, [title, status, id]);
  return updateTask;
};

module.exports = {
  getAll,
  createTask,
  deleteTask,
  updateTask,
};