import mongoose from 'mongoose';

let productSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  quantity: Number,
  image: String,
  description: String,
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
});

productSchema.toJSON = function () {
  return {
     /* eslint-disable no-underscore-dangle */
    id: this._id,
    name: this.name,
    brand: this.brand,
    price: this.price,
    quantity: this.quantity,
    image: this.image,
    description: this.description,
    categoryId: this.categoryId,
  };
};

export default mongoose.model('Product', productSchema);
