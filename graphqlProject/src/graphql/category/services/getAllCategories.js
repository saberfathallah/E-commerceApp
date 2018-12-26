import fetch from 'node-fetch';

async function getAllCategoriesMicroService () {
  const url = `${process.env.BACK_END_SERVICES}/categories`;
  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
     },
  });
}

async function getAllCategories() {
  const result = await getAllCategoriesMicroService();
  if (result.status !==200) {
    return { error: 'error cannot get all ctegories'}
  } else {
    const categories = await result.json();
    return { categories };
  }
}

export default getAllCategories;
