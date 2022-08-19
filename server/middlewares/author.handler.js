function authorMiddleware(req, res, next) {
  res.author = {
    name: 'Nahuel',
    lastname: 'Soma',
  };
  next();
}

module.exports = authorMiddleware;
