import fetch from 'node-fetch';

async function getListOfClientsInvitedMicroService(userid) {
  const url = `${process.env.BACK_END_SERVICES}/getListOfClientsInvited`;
  const data = await fetch(url, {
    method: 'GET',
    headers: {
      userid,
      'Content-Type': 'application/json',
    },
  });
  return data;
}

async function getListOfClientsInvited(userid) {
  const result = await getListOfClientsInvitedMicroService(userid);
  const invitations = await result.json();
  if (result.status !== 200) {
    return { error: 'error cannot get list of clients invited ' };
  }
  return { invitations };
}

export default getListOfClientsInvited;
