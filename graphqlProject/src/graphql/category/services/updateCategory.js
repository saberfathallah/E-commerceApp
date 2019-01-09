
import fetch from 'node-fetch';

async function updateCategryMicroServices(data, categoryId, userid) {
  const url = `${process.env.BACK_END_SERVICES}/categories/${categoryId}`;
  return fetch(url, {
    method: 'PUT',
    body: JSON.stringify({ data }),
    headers: {
      userid,
      'Content-Type': 'application/json',
    },
  });
}

async function updateCategory(data, categoryId, userid) {
  const result = await updateCategryMicroServices(data, categoryId, userid);
  if (result.status !== 200) {
    return { error: 'error cannot update category' };
  }
  const category = await result.json();
  return { category };
}

export default updateCategory;
