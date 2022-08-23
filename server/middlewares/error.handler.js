function logErrors(err, req, res, next) {
  console.log('logErrors');
  console.error(err);
  next(err);
}

function dataFetchErrorHandler(err, req, res, next) {
  if (err.message.includes('AxiosError')) {
    res.status(404).json({
      error: true,
      status: 404,
      message: err.message || 'no message',
    });
  }

  if (err.message.includes('No product found')) {
    res.status(404).json({
      error: true,
      status: 404,
      message: err.message || 'no message',
    });
  }
  next();
}

function errorHandler(err, req, res, next) {
  res.status(500).json({
    error: true,
    status: 500,
    message: err.message || 'no message',
    stack: err.stack || 'no stack',
  });
  next();
}

module.exports = {
  logErrors,
  dataFetchErrorHandler,
  errorHandler,
};
