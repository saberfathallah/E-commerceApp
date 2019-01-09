import fetch from 'node-fetch';

async function getProductMicroService(productId) {
  const url = `${process.env.BACK_END_SERVICES}/products/${productId}`;
  const data = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return data;
}

async function getProductById(productId) {
  const result = await getProductMicroService(productId);
  const product = await result.json();
  if (result.status !== 200) {
    return { error: 'error cannot get product ' };
  }
  return { product };
}

export default getProductById;
