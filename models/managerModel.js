
const mongoose = require('mongoose');

const managersSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  role: { type: String, required: true },

});

const manager = mongoose.model('manager', managersSchema);

module.exports = manager;
