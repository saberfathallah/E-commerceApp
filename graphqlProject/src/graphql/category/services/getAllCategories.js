import fetch from 'node-fetch';
import dotenv from 'dotenv';

async function getAllCategoriesMicroService (userid) {
  const url = `${process.env.BACK_END_SERVICES}/categories`;
  return fetch(url, {
    method: 'GET',
    headers: {
        userid,
        'Content-Type': 'application/json',
     },
  });
}

async function getAllCategories(userid) {
  const result = await getAllCategoriesMicroService(userid);
  if (result.status !==200) {
    return { error: 'error cannot get all ctegories'}
  } else {
    const categories = await result.json();
    return { categories };
  }
}

export default getAllCategories;
