const express = require('express');

const CategoriesService = require('../services/categories.services');

const router = express.Router();
const service = new CategoriesService();

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const category = await service.findOne(id);
    res.json(category);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
