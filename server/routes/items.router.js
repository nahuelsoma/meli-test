const express = require('express');

const ItemsService = require('../services/items.service');

const router = express.Router();
const service = new ItemsService();

router.get('/', async (req, res, next) => {
  const { q, limit } = req.query;
  const author = res.author;

  if (!q) {
    res.status(400).json({
      error: 'Bad request',
      message: "Add a 'q' query - /api/items?q=:query",
    });
  }

  try {
    const items = await service.find(q, limit);
    res.json({
      author,
      ...items,
    });
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  const author = res.author;

  try {
    const { id } = req.params;
    const item = await service.findOne(id);

    res.json({
      author,
      ...item,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
