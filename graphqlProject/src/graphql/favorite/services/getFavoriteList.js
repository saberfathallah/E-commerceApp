import fetch from 'node-fetch';
import { map } from 'lodash';
import getProductById from '../../product/services/getProductById';

async function getFavoriteListMicroService(userid) {
  const url = `${process.env.CART_AND_LISTS_SERVICES}/favorites`;
  return fetch(url, {
    method: 'GET',
    headers: {
      userid,
      'Content-Type': 'application/json',
    },
  });
}

async function getFavoriteList(userid) {
  const result = await getFavoriteListMicroService(userid);
  const list = await result.json();
  // eslint-disable-next-line no-underscore-dangle
  const items = await Promise.all(map(list, async (item) => {
    const elm = await getProductById(item.productId);
    return elm.product;
  }));
  return items;
}

export default getFavoriteList;
