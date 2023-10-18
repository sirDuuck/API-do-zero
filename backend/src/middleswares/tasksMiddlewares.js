require('express');

const validateFieldTitle = (request, response, next) => {
  const { body } = request;

  if (body.title === undefined) {
    return response.status(400).json({ message: 'The field "title" is required'});
  }

  if (body.title === '') {
    return response.status(400).json({ message: 'The field "title" can not be empty' });
  }
  
  next();
};

const validateFieldStatus = (request, response, next) => {
  const { body } = request;
  
  if (body.title === undefined) {
    return response.status(400).json({ message: 'The field "status" is required'});
  }
  
  if (body.title === '') {
    return response.status(400).json({ message: 'The field "status" can not be empty' });
  }
    
  next();
};

module.exports = {
  validateFieldTitle,
  validateFieldStatus,
};