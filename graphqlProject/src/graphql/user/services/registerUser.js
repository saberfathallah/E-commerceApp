
import fetch from 'node-fetch';

async function registerMicroService(data) {
  const url = `${process.env.BACK_END_SERVICES}/register`;
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify({ data }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export default registerMicroService;
