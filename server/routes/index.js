const express = require('express');

const itemsRouter = require('./items.router');
const categoriesRouter = require('./categories.router');
const currenciesRouter = require('./currencies.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/', router);
  router.use('/items', itemsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/currencies', currenciesRouter);
}

module.exports = routerApi;
