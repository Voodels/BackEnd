const mongoose = require('mongoose');
const { Schema } = mongoose;

//Schema converts to model
const productSchema = new Schema({
  id: String,
  title: {
    type: String,
    minlength: [3, 'Title can not be less than 3 characters'],
    maxlength: [100, 'Title can not be more than 100 characters'],
  },
  description: {
    type: String,
    minlength: [3, 'Description can not be less than 3 characters'],
    maxlength: [500, 'Description can not be more than 500 characters'],
  },
  price: {
    type: Number,

  },
  discountPercentage: {
    type: Number,

  },
  stock: {
    type: Number,
  },
  brand: {

    type: String,

  },
  category: {
    type: String,
  },
  thumbnail: {
    type: String,
  },
  images: [String],
});
//     Model                     collection  schema
exports.Product = mongoose.model('Product', productSchema);
