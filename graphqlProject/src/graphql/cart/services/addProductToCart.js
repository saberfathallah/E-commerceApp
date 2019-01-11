
import fetch from 'node-fetch';
import getTotalCart from '../../../utils/getTotalCart';

async function addProductToCartMicroServices(productId, quantity, price, userid) {
  const url = `${process.env.CART_AND_LISTS_SERVICES}/cart`;
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify({ productId, quantity, price }),
    headers: {
      userid,
      'Content-Type': 'application/json',
    },
  });
}

async function addProductToCart(productId, quantity, price, userid) {
  const result = await addProductToCartMicroServices(productId, quantity, price, userid);
  if (result.status !== 200) {
    return { error: 'error cannot add product to cart' };
  }
  const cart = await result.json();
  const total = getTotalCart(cart.cart);
  cart.cart.total = total;
  return { cart };
}

export default addProductToCart;
