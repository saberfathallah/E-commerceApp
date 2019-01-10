
import findCart from './findCart';
import removeItem from './removeItem';

async function removeItemsFromCart(userId, items) {
  await Promise.all(items.map(item => removeItem(userId, item)));
  const cart = await findCart(userId);
  return cart;
}

export default removeItemsFromCart;
