import fetch from 'node-fetch';

async function getAllProductsMicroService() {
  const url = `${process.env.BACK_END_SERVICES}/products`;
  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

async function getAllProducts() {
  const result = await getAllProductsMicroService();
  if (result.status !== 200) {
    return { error: 'error cannot get all products' };
  }
  const products = await result.json();
  return { products };
}

export default getAllProducts;
