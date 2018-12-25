import fetch from 'node-fetch';
import dotenv from 'dotenv';

async function getAllUsersMicroService (userid) {
  const url = `${process.env.BACK_END_SERVICES}/users`;
  return fetch(url, {
    method: 'GET',
    headers: {
        userid,
        'Content-Type': 'application/json',
     },
  })
}

async function getAllUsers(userid) {
  const result = await getAllUsersMicroService(userid);
  const users = await result.json();
  return users;
}

export default getAllUsers;
