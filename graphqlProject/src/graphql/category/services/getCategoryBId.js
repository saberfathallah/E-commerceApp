import fetch from 'node-fetch';
import dotgetenv from 'dotenv';

async function getCategoryMicroService(category_id, userid) {
  const url = `${process.env.BACK_END_SERVICES}/categories/${category_id}`;
  const data = await fetch(url, {
    method: 'GET',
    headers: {
      userid,
      'Content-Type': 'application/json',
     },
  });
  return data;
}

async function getCategoryById(category_id, userid,) {
  const result = await getCategoryMicroService(category_id, userid,);
  const category = await result.json();
  if (result.status !== 200) {
     return { error: 'error cannot get category '}
  } else {
      return { category };
  }
}

export default getCategoryById;