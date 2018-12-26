import fetch from 'node-fetch';
import dotgetenv from 'dotenv';

async function getCategoryMicroService(categoryId) {
  const url = `${process.env.BACK_END_SERVICES}/categories/${categoryId}`;
  const data = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
     },
  });
  return data;
}

async function getCategoryById(categoryId) {
  const result = await getCategoryMicroService(categoryId);
  const category = await result.json();
  if (result.status !== 200) {
     return { error: 'error cannot get category '}
  } else {
      return { category };
  }
}

export default getCategoryById;