import fetch from 'node-fetch';

async function getProductsByCategoryIdMicroService(categoryId) {
  const url = `${process.env.BACK_END_SERVICES}/productsByCategory/${categoryId}`;
  const data = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return data;
}

async function getProductsByCategoryId(categoryId) {
  const result = await getProductsByCategoryIdMicroService(categoryId);
  const products = await result.json();
  if (result.status !== 200) {
    return { error: 'error cannot get products by categoryId' };
  }
  return { products };
}

export default getProductsByCategoryId;
