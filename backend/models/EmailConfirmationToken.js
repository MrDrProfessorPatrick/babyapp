const { Schema, model } = require('mongoose');

const Token = new Schema({
  token: { type: String, required: true, unique: true },
});

module.exports = model('Token', Token);
