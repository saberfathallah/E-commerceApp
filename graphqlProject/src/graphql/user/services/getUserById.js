import fetch from 'node-fetch';

async function getUserMicroService(userId, userid) {
  const url = `${process.env.BACK_END_SERVICES}/users/${userId}`;
  const data = await fetch(url, {
    method: 'GET',
    headers: {
      userid,
      'Content-Type': 'application/json',
    },
  });
  return data;
}

async function getUserById(userId, userid) {
  const result = await getUserMicroService(userId, userid);
  const user = await result.json();
  if (result.status !== 200) {
    return { error: 'error cannot get user ' };
  }
  return { user };
}

export default getUserById;
