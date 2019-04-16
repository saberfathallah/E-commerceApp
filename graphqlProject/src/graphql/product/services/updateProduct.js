
import fetch from 'node-fetch';

async function updateProductMicroServices(data, productId) {
  const url = `${process.env.BACK_END_SERVICES}/products/${productId}`;
  return fetch(url, {
    method: 'PUT',
    body: JSON.stringify({ data }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

async function updateProduct(data, productId) {
  const result = await updateProductMicroServices(data, productId);
  if (result.status !== 200) {
    return { error: 'error cannot update product' };
  }
  const product = await result.json();
  return { product };
}

export default updateProduct;
