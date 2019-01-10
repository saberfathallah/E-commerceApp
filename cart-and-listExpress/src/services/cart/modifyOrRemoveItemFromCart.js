import findOrCreateCart from './findOrCreateCart';
import modifyOrDeleteItem from './modifyOrDeleteItem';

async function modifyOrRemoveItemFromCart(userId, cartItemData) {
  const cart = await findOrCreateCart(userId);
  modifyOrDeleteItem(cart.items, cartItemData);
  return cart.save();
}

export default modifyOrRemoveItemFromCart;
