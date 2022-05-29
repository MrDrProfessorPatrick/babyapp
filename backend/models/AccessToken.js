const { Schema, model } = require('mongoose');

const AccessToken = new Schema({
  userId: { type: String, required: true, unique: true },
  accessToken: { type: String, required: true, unique: true },
  refreshToken: { type: String, required: true, unique: true },
});

module.exports = model('Token', AccessToken);
