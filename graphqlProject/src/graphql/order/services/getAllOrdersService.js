import fetch from 'node-fetch';

async function getAllOrdersServiceMicroService(userid) {
  const url = `${process.env.CART_AND_LISTS_SERVICES}/orders`;
  return fetch(url, {
    method: 'GET',
    headers: {
      userid,
      'Content-Type': 'application/json',
    },
  });
}

async function getAllOrdersService(userid) {
  const result = await getAllOrdersServiceMicroService(userid);
  if (result.status !== 200) {
    return { error: 'error cannot get orders' };
  }
  const orders = await result.json();
  return orders;
}

export default getAllOrdersService;
