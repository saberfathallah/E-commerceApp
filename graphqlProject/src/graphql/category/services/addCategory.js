
import fetch from 'node-fetch';

async function addCategoryMicroServices(data, userid) {
  const url = `${process.env.BACK_END_SERVICES}/categories`;
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify({ data }),
    headers: {
      userid,
      'Content-Type': 'application/json',
    },
  });
}

async function addCategory(data, userid) {
  const result = await addCategoryMicroServices(data, userid);
  if (result.status !== 200) {
    return { error: 'error cannot add category' };
  }
  const category = await result.json();
  return { category };
}

export default addCategory;
