const express = require('express');
const Mine = require('../models/Mine');
const router = express.Router();

// Get mines by state
router.get('/:state', async (req, res) => {
  try {
    const mines = await Mine.find({ state: req.params.state });
    res.json(mines);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get details of a specific mine by name
router.get('/:state/:mineName', async (req, res) => {
  try {
    const mine = await Mine.findOne({ state: req.params.state, name: req.params.mineName });
    res.json(mine);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
