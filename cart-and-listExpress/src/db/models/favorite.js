import mongoose from 'mongoose';

let favoriteSchema = new mongoose.Schema({
  productId: String,
  userId: String,
});

favoriteSchema.toJSON = function () {
  return {
     /* eslint-disable no-underscore-dangle */
    productId: this.productId,
    userId: this.userId,
  };
};

export default mongoose.model('Favorite', favoriteSchema);
