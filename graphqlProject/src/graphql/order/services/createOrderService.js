
import fetch from 'node-fetch';
import { map } from 'lodash';
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

async function modifyTopSalesMicroServices(quantity, productId) {
  const url = `${process.env.BACK_END_SERVICES}/products/topSales/${productId}`;
  return fetch(url, {
    method: 'PUT',
    body: JSON.stringify({ quantity }),
    headers: {
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
  await Promise.all(map(data.items, async (item) => {
    await modifyTopSalesMicroServices(item.quantity, item.productId);
  }));
  return order;
}

export default createOrderService;
