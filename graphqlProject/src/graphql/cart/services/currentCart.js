import fetch from 'node-fetch';

async function getCurrentCartMicroService(userid) {
  const url = `${process.env.CART_AND_LISTS_SERVICES}/cart`;
  return fetch(url, {
    method: 'GET',
    headers: {
      userid,
      'Content-Type': 'application/json',
    },
  });
}

async function currentCart(userid) {
  const result = await getCurrentCartMicroService(userid);
  const cart = await result.json();
  return cart;
}

export default currentCart;
