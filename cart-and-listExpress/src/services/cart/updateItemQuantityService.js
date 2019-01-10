import findCart from './findCart';
import updateOrDeleteItem from './updateOrDeleteItem';

async function updateItemQuantityService(userId, itemToUpdate) {
  const cart = await findCart(userId);
  updateOrDeleteItem(cart.items, itemToUpdate);
  return cart.save();
}

export default updateItemQuantityService;
