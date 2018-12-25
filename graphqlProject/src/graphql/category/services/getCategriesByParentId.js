import fetch from 'node-fetch';
import dotenv from 'dotenv';

async function getCategoriesByParentIdMicroService(categoryId, userid) {
    const url = `${process.env.BACK_END_SERVICES}/allCategories/${categoryId}`;
    const data = await fetch(url, {
      method: 'GET',
      headers: {
        userid,
        'Content-Type': 'application/json',
       },
    });
    return data;
  }

  async function getCategoriesByParentId(categoryId, userid,) {
    const result = await getCategoriesByParentIdMicroService(categoryId, userid,);
    const categories = await result.json();
    if (result.status !== 200) {
       return { error: 'error cannot get categories by parentId' }
    } else {
       return { categories };
    }
  }
  
  export default getCategoriesByParentId;