// function logErrors(err, req, res, next) {
//   console.log('logErrors');
//   console.error(err);
//   next(err);
// }

function dataFetchErrorHandler(err, req, res, next) {
  // console.log('axiosErrorHandler >>>>>>>>>>>>>>>>>>>>>>>>>>>');

  if (err.message.includes('AxiosError')) {
    res.status(404).json({
      error: 'Axios request',
      message: err.message || 'no message',
    });
  }

  // console.log('notFoundErrorHandler >>>>>>>>>>>>>>>>>>>>>>>>>>>');

  if (err.message.includes('No product found')) {
    res.status(404).json({
      message: err.message || 'no message',
    });
  }

  next();
}

function errorHandler(err, req, res, next) {
  // console.log('errorHandler >>>>>>>>>>>>>>>>>>>>>>>>>>>');

  res.status(500).json({
    message: err.message || 'no message',
    stack: err.stack || 'no stack',
  });
  next();
}

module.exports = {
  // logErrors,
  dataFetchErrorHandler,
  errorHandler,
};
