
import fetch from 'node-fetch';

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
  return { cart };
}

export default addProductToCart;
