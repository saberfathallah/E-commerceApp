import Cart from '../../db/models/cart';
import findCart from './findCart';

async function createCart(userId) {
  return Cart.create({
    userId,
    items: [],
  });
}

async function findOrCreateCart(userId) {
  const cart = await findCart(userId);
  if (cart) return cart;

  return createCart(userId);
}

export default findOrCreateCart;
