const mongoose = require('mongoose');

const Note = new mongoose.Schema({
  author: { type: String, require: true },
  title: { type: String, require: true },
  content: { type: String, require: true },
  picture: { type: String },
});

module.exports = mongoose.model('Note', Note);
