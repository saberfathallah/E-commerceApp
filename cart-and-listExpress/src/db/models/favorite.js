/* eslint-disable prefer-destructuring */
import mongoose from 'mongoose';
// eslint-disable-next-line no-var
var Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

let favoriteSchema = new mongoose.Schema({
  productId: ObjectId,
  userId: ObjectId,
});

favoriteSchema.toJSON = function () {
  return {
     /* eslint-disable no-underscore-dangle */
    productId: this.productId,
    userId: this.userId,
  };
};

export default mongoose.model('Favorite', favoriteSchema);
