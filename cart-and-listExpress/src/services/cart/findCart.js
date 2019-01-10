import Cart from '../../db/models/cart';

function findCart(userId) {
  return Cart.findOne({ userId });
}

export default findCart;
