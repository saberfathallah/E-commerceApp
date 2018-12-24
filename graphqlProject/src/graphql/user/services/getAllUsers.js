import fetch from 'node-fetch';
import dotenv from 'dotenv';

async function getAllUsersMicroService () {
  const url = `${process.env.BACK_END_SERVICES}/users`;
  return fetch(url, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
     },
  })
}

async function getAllUsers() {
  const result = await getAllUsersMicroService();
  const users = await result.json();
  return users;
}

export default getAllUsers;
