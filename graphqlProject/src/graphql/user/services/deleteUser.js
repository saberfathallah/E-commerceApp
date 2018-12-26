import fetch from 'node-fetch';

async function deleteUserMicroService(userId, userid) {
  const url = `${process.env.BACK_END_SERVICES}/users`;
  const data = await fetch(url, {
    method: 'DELETE',
    body: JSON.stringify({ userId }),
    headers: {
      userid,
      'Content-Type': 'application/json',
    },
  });
  return data;
}

async function deleteUser(userId, userid) {
  const result = await deleteUserMicroService(userId, userid);
  if (result.status !== 200) {
    return { error: 'error delete user ' };
  }
  return { success: 'success deleted user' };
}

export default deleteUser;
