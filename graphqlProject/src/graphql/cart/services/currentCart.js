import fetch from 'node-fetch';
import getTotalCart from '../../../utils/getTotalCart';

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
  const total = getTotalCart(cart);
  const totalWithPromotion = getTotalCart(cart, true);
  cart.totalWithPromotion = totalWithPromotion;
  cart.total = total;
  return cart;
}

export default currentCart;
