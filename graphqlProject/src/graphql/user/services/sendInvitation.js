import fetch from 'node-fetch';

async function sendInvitationMicroService(idInvited, userid) {
  const url = `${process.env.BACK_END_SERVICES}/sendInvitation`;
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

async function sendInvitation(idInvited, userid) {
  const result = await sendInvitationMicroService(idInvited, userid);
  const msg = await result.json();
  if (result.status !== 200) {
    return { error: 'error cannot invitet user ' };
  }
  return { success: msg.success };
}

export default sendInvitation;
