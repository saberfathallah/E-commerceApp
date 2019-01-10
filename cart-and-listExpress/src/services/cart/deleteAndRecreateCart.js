import findOrCreateCart from './findOrCreateCart';
import Cart from '../../db/models/cart';

async function deleteAndRecreateCart(userId) {
  await Cart.remove({ userId });
  const cart = await findOrCreateCart(userId);
  return cart;
}

export default deleteAndRecreateCart;
