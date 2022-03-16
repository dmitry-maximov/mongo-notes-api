require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/noteRoute');

const PORT = process.env.PORT || 6000;
const DB_URL = ``;

const app = express();

app.use('/api', router);

const start = async () => {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(PORT, () => console.log(`server started on ${PORT} port`));
  } catch (error) {
    console.log(error);
  }
};

start();
