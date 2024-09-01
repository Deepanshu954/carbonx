const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const emissionsRouter = require('./routes/emissions');
const minesRouter = require('./routes/mines');

require('dotenv').config(); // To use environment variables

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

app.use('/api/emissions', emissionsRouter);
app.use('/api/mines', minesRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
