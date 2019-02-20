import fetch from 'node-fetch';
import { filter } from 'lodash';

async function getAllClientsMicroService(userid) {
  const url = `${process.env.BACK_END_SERVICES}/clients`;
  return fetch(url, {
    method: 'GET',
    headers: {
      userid,
      'Content-Type': 'application/json',
    },
  });
}

async function getAllClients(userid) {
  const result = await getAllClientsMicroService(userid);
  const users = await result.json();
  // eslint-disable-next-line no-underscore-dangle
  const clients = filter(users, user => user._id !== userid);
  return clients;
}

export default getAllClients;
