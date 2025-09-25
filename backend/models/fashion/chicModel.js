const mongoose = require('mongoose');

const chicSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("chic", chicSchema, 'chic');