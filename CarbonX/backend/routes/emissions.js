const express = require('express');
const Emission = require('../models/Emission');
const router = express.Router();

// Get emissions data for a specific mine
router.get('/:mineId', async (req, res) => {
  try {
    const emissions = await Emission.find({ mineId: req.params.mineId });
    res.json(emissions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
