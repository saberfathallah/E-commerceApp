import fetch from 'node-fetch';

async function getOrderByIdServiceMicroService(orderId, userid) {
  const url = `${process.env.CART_AND_LISTS_SERVICES}/orders/${orderId}`;
  const data = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      userid,
    },
  });
  return data;
}

async function getOrderByIdService(orderId, userId) {
  const result = await getOrderByIdServiceMicroService(orderId, userId);
  if (result.status !== 200) {
    return { error: 'error cannot get order ' };
  }
  const order = await result.json();
  return order;
}

export default getOrderByIdService;
