import fetch from 'node-fetch';

async function annulateInvitationMicroService(idInvited, userid) {
  const url = `${process.env.BACK_END_SERVICES}/annulateInvitation`;
  const data = await fetch(url, {
    method: 'DELETE',
    body: JSON.stringify({ idInvited }),
    headers: {
      userid,
      'Content-Type': 'application/json',
    },
  });
  return data;
}

async function annulateInvitation(idInvited, userid) {
  const result = await annulateInvitationMicroService(idInvited, userid);
  const msg = await result.json();
  if (result.status !== 200) {
    return { error: 'error cannot annulate invitation ' };
  }
  return { success: msg.success };
}

export default annulateInvitation;
