const mongoose = require('mongoose');

const mineSchema = new mongoose.Schema({
  state: String,
  name: String,
  location: String,
  carbonEmissions: Number, // current year's emissions in tons
  productionCapacity: Number // e.g., in tons
});

const Mine = mongoose.model('Mine', mineSchema);

module.exports = Mine;
