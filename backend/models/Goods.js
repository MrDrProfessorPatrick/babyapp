const { Schema, model } = require('mongoose');
const { GoodSchema } = require('../models/Good');

const GoodsSchema = new Schema({
  category: { type: String, required: true },
  goods: [GoodSchema],
});

module.exports = model('GoodsArray', GoodsSchema);
