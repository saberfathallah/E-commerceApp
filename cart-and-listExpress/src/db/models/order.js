/* eslint-disable prefer-destructuring */
import mongoose from 'mongoose';
// eslint-disable-next-line no-var
var Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const OrderSchema = mongoose.Schema({
  userId: { type: ObjectId, index: true, required: true },
  items: [{
    productId: { type: ObjectId, required: true },
    quantity: { type: Number, required: true },
  }],
  adress: String,
  total: Number,
}, { timestamps: {} });

const Order = mongoose.model('Order', OrderSchema);

export default Order;
