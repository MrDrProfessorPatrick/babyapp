const { Schema, model } = require('mongoose');

let GoodSchema = new Schema({
  category: { type: String, required: false },
  images: { type: Buffer, required: false },
  title: { type: String, required: true },
  characteristics: { type: String, required: true },
  description: { type: String, required: false },
  articul: { type: String, required: false },
  price: { type: Number, required: true },
});

const GoodSchemaModel = model('Good', GoodSchema);

module.exports = {
  GoodSchema,
  GoodSchemaModel,
};
