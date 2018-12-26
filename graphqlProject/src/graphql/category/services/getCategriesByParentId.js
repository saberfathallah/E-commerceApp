import fetch from 'node-fetch';
import dotenv from 'dotenv';

async function getCategoriesByParentIdMicroService(categoryId) {
    const url = `${process.env.BACK_END_SERVICES}/allCategories/${categoryId}`;
    const data = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return data;
  }

  async function getCategoriesByParentId(categoryId) {
    const result = await getCategoriesByParentIdMicroService(categoryId);
    const categories = await result.json();
    if (result.status !== 200) {
       return { error: 'error cannot get categories by parentId' }
    } else {
       return { categories };
    }
  }
  
  export default getCategoriesByParentId;