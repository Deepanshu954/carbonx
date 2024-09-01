const mongoose = require('mongoose');

const emissionSchema = new mongoose.Schema({
  mineId: { type: mongoose.Schema.Types.ObjectId, ref: 'Mine' },
  year: Number,
  carbonEmission: Number // in tons
});

const Emission = mongoose.model('Emission', emissionSchema);

module.exports = Emission;
