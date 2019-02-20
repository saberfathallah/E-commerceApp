import fetch from 'node-fetch';
import { map, forEach, mapKeys } from 'lodash';
import getUserByid from './getUserById';

async function getListOfFriendsMicroService(userid) {
  const url = `${process.env.BACK_END_SERVICES}/getListOfFriends`;
  const data = await fetch(url, {
    method: 'GET',
    headers: {
      userid,
      'Content-Type': 'application/json',
    },
  });
  return data;
}

function getUsersByInvitations(userid, invitations) {
  const users = [];
  forEach(invitations, (elem) => {
    mapKeys(elem, (val) => {
      if (val !== userid) {
        users.push(val);
      }
    });
  });
  return users;
}

async function getListOfFriends(userid) {
  const result = await getListOfFriendsMicroService(userid);
  const invitations = await result.json();
  if (result.status !== 200) {
    return { error: 'error cannot get list of clients invited ' };
  }

  const invs = map(invitations, ({ id, idInvited }) => ({ id, idInvited }));
  const response = getUsersByInvitations(userid, invs);
  const users = await Promise.all(map(response, async (inv) => {
    const elm = await getUserByid(inv, userid);
    return elm.user;
  }));
  return { users };
}

export default getListOfFriends;
