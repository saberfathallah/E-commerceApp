/* eslint-disable no-underscore-dangle */
import fetch from 'node-fetch';
import { map } from 'lodash';
import getUserByid from '../../user/services/getUserById';

async function topUserCommandesMicroService(userid) {
  const url = `${process.env.CART_AND_LISTS_SERVICES}/statistics/topUserCommandes`;
  return fetch(url, {
    method: 'GET',
    headers: {
      userid,
      'Content-Type': 'application/json',
    },
  });
}

async function topUserCommandes(userid) {
  const result = await topUserCommandesMicroService(userid);
  if (result.status !== 200) {
    return { error: 'error cannot get stat orders' };
  }
  const orders = await result.json();
  const statOrders = await Promise.all(map(orders, async (or) => {
    const elm = await getUserByid(or._id, userid);
    const stat = { name: elm.user.firstName, id: elm.user._id, count: or.count };
    return stat;
  }));
  return statOrders;
}

export default topUserCommandes;
