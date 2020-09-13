const ErrorResponse = require('../utils/errorReponse');

const errorHandler = (err, req, res, next) => {
  const error = { ...err };

  error.message = err.message;

  console.log(err.stack.red);

  //Bad ObjectId Error
  if (err.name === 'CastError') {
    const message = `Resource not found with id: ${err.value}`;
    error = new ErrorResponse(message, 404);
  }

  //Duplicate value Error
  if (err.code === 11000) {
    const message = 'Duplicate value entered';
    error = new ErrorResponse(message, 400);
  }

  //Validation Error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(error => error.message);
    error = new ErrorResponse(message, 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error encountered!!'
  })
}

module.exports = errorHandler;
