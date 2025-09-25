const mongoose = require('mongoose');

const shadiSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("shadi", shadiSchema, 'shadi');