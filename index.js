require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/noteRoute');
const errorHandler = require('./middleware/error');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const PORT = process.env.PORT || 6000;
const DB_URL = ``;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('static'));
app.use(fileUpload({}));
app.use('/api', router);
app.use(errorHandler);

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
