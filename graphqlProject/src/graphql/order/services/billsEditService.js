import fetch from 'node-fetch';

async function billsEditServiceMicroService(orderId, userid) {
  const url = `${process.env.CART_AND_LISTS_SERVICES}/orders/billsEdit/${orderId}`;
  const data = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      userid,
    },
  });
  return data;
}

async function billsEditService(orderId, userId) {
  const result = await billsEditServiceMicroService(orderId, userId);
  if (result.status !== 200) {
    return { error: 'error cannot get base64 ' };
  }
  const base64 = await result.json();
  return base64;
}

export default billsEditService;
