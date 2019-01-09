import fetch from 'node-fetch';

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
  return list;
}

export default getFavoriteList;
