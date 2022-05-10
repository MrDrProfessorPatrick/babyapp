const { Schema, model } = require('mongoose');

const User = new Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: false },
  phone: { type: Number, unique: true, required: false },
  password: { type: String, required: true },
  verified: { type: Boolean, required: false },
  roles: [{ type: String, ref: 'Role' }],
});

module.exports = model('User', User);
