import fetch from 'node-fetch';
import { filter } from 'lodash';

async function getAllCategoriesMicroService() {
  const url = `${process.env.BACK_END_SERVICES}/categories`;
  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

async function getAllCategories(hasLevel) {
  const result = await getAllCategoriesMicroService();
  if (result.status !== 200) {
    return { error: 'error cannot get all ctegories' };
  }
  const categories = await result.json();
  if (hasLevel) {
    const categ = filter(categories, cat => cat.level === 1);
    return { categories: categ };
  }
  return { categories };
}

export default getAllCategories;
