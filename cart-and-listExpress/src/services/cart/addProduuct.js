import findOrCreateCart from './findOrCreateCart';
import addOrUpdateItem from './addOrUpdateItem';

async function addProduct(userId, cartItemData) {
  const cart = await findOrCreateCart(userId);
  addOrUpdateItem(cart.items, cartItemData);
  return cart.save();
}

export default addProduct;
