import fetch from 'node-fetch';

async function acceptInvitationMicroService(idInvited, userid) {
  const url = `${process.env.BACK_END_SERVICES}/acceptInvitation`;
  const data = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({ idInvited }),
    headers: {
      userid,
      'Content-Type': 'application/json',
    },
  });
  return data;
}

async function acceptInvitation(idInvited, userid) {
  const result = await acceptInvitationMicroService(idInvited, userid);
  const msg = await result.json();
  if (result.status !== 200) {
    return { error: 'error cannot accept invitation ' };
  }
  return { success: msg.success };
}

export default acceptInvitation;
