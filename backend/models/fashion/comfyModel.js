const mongoose = require('mongoose');

const comfySchema = new mongoose.Schema({
  image: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("comfy", comfySchema, 'comfy');