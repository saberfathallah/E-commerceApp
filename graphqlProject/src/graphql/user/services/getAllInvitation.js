import fetch from 'node-fetch';
import { map } from 'lodash';
import getUserByid from './getUserById';

async function getAllInvitationMicroService(userid) {
  const url = `${process.env.BACK_END_SERVICES}/getAllInvitation`;
  const data = await fetch(url, {
    method: 'GET',
    headers: {
      userid,
      'Content-Type': 'application/json',
    },
  });
  return data;
}

async function getAllInvitation(userid) {
  const result = await getAllInvitationMicroService(userid);
  const invitations = await result.json();
  if (result.status !== 200) {
    return { error: 'error cannot get list invitation ' };
  }
  const users = await Promise.all(map(invitations, async (inv) => {
    const elm = await getUserByid(inv.id, userid);
    return elm.user;
  }));
  return { users };
}

export default getAllInvitation;
