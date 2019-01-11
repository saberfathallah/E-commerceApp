
import fetch from 'node-fetch';
import getTotalCart from '../../../utils/getTotalCart';

async function removeProductFromCartMicroServices(productId, userid) {
  const url = `${process.env.CART_AND_LISTS_SERVICES}/cart/removeItems`;
  return fetch(url, {
    method: 'DELETE',
    body: JSON.stringify(productId),
    headers: {
      userid,
      'Content-Type': 'application/json',
    },
  });
}

async function removeProductFromCart(productId, userid) {
  const result = await removeProductFromCartMicroServices([productId], userid);
  if (result.status !== 200) {
    return { error: 'error cannot remove product to cart' };
  }
  const cart = await result.json();
  const total = getTotalCart(cart);
  cart.total = total;
  return { cart };
}

export default removeProductFromCart;
