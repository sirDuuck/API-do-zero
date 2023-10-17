const connection = require('./connection');

const getALL = async () => {
  const tasks = await connection.execute('SELECT * FROM tasks');
  return tasks;
};

module.exports = {
  getALL
};