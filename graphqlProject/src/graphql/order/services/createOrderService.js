
import fetch from 'node-fetch';

async function createOrderServiceMicroServices(data, userid) {
  const url = `${process.env.CART_AND_LISTS_SERVICES}/orders`;
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      userid,
      'Content-Type': 'application/json',
    },
  });
}

async function createOrderService(data, userid) {
  const result = await createOrderServiceMicroServices(data, userid);
  if (result.status !== 200) {
    return { error: 'error cannot add order' };
  }
  const order = await result.json();
  return order;
}

export default createOrderService;
