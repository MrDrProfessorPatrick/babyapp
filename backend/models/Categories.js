const { Schema, model } = require('mongoose');

const CategoriesList = new Schema({
  categoryModelId: { type: String, required: true },
  categories: { type: Array, required: true },
});

module.exports = model('Categories', CategoriesList);
