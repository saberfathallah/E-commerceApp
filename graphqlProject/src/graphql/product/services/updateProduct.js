
import fetch from 'node-fetch';

async function updateProductMicroServices(data, productId, userid) {
  const url = `${process.env.BACK_END_SERVICES}/products/${productId}`;
  return fetch(url, {
    method: 'PUT',
    body: JSON.stringify({ data }),
    headers: {
      userid,
      'Content-Type': 'application/json',
    },
  });
}

async function updateProduct(data, productId, userid) {
  const result = await updateProductMicroServices(data, productId, userid);
  if (result.status !== 200) {
    return { error: 'error cannot update product' };
  }
  const product = await result.json();
  return { product };
}

export default updateProduct;
