const express = require('express');

const CurrenciesService = require('../services/currencies.services');

const router = express.Router();
const service = new CurrenciesService();

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const currency = await service.findOne(id);
    res.json(currency);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
