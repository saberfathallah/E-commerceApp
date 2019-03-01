import mongoose from 'mongoose';

const promotionsType = {
  type: String,
  startDatePromotion: Number,
  endDatePromotion: Number,
  value: String,
  label: String,
};

let productSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  quantity: Number,
  image: String,
  description: String,
  topSales: Number,
  rate: Number,
  userRateCount: Number,
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  promotions: {
    typePromo: String,
    startDatePromotion: Number,
    endDatePromotion: Number,
    value: Number,
    label: String,
  },
  isPromo: Boolean,
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
    promotions: this.promotions,
  };
};

export default mongoose.model('Product', productSchema);
