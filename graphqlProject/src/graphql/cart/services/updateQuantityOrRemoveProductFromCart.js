import fetch from 'node-fetch';
import getTotalCart from '../../../utils/getTotalCart';

async function updateQuantityOrRemoveProductFromCartMicroService(productId, quantity, userid) {
  const url = `${process.env.CART_AND_LISTS_SERVICES}/cart/updateQuantity`;
  const data = await fetch(url, {
    method: 'DELETE',
    body: JSON.stringify({ productId, quantity }),
    headers: {
      userid,
      'Content-Type': 'application/json',
    },
  });
  return data;
}

async function updateQuantityOrRemoveProductFromCart(productId, quantity, userid) {
  const result = await
  updateQuantityOrRemoveProductFromCartMicroService(productId, quantity, userid);
  if (result.status !== 200) {
    return { error: 'error cannot add product to cart' };
  }
  const cart = await result.json();
  const total = getTotalCart(cart.cart);
  cart.cart.total = total;
  return cart;
}

export default updateQuantityOrRemoveProductFromCart;
