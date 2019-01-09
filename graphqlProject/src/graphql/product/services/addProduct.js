
import fetch from 'node-fetch';

async function addProductMicroServices(data, userid) {
  const url = `${process.env.BACK_END_SERVICES}/products`;
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify({ data }),
    headers: {
      userid,
      'Content-Type': 'application/json',
    },
  });
}

async function addProduct(data, userid) {
  const result = await addProductMicroServices(data, userid);
  if (result.status !== 200) {
    return { error: 'error cannot add product' };
  }
  const product = await result.json();
  return { product };
}

export default addProduct;
