/* eslint-disable prefer-destructuring */
import mongoose from 'mongoose';
// eslint-disable-next-line no-var
var Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const CartSchema = mongoose.Schema({
  userId: { type: ObjectId, index: true, required: true },
  items: [{
    productId: { type: ObjectId, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, index: true, required: true },
    isPromo: { type: Boolean },
    promotionPrice: { type: Number },
  }],
});

const Cart = mongoose.model('Cart', CartSchema);

export default Cart;
