
import fetch from 'node-fetch';

async function modifyRatingProductMicroServices(rate, productId) {
  const url = `${process.env.BACK_END_SERVICES}/rating/${productId}`;
  return fetch(url, {
    method: 'PUT',
    body: JSON.stringify({ rate }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

async function modifyRatingProduct(rate, productId) {
  const result = await modifyRatingProductMicroServices(rate, productId);
  if (result.status !== 200) {
    return { error: 'error cannot update product' };
  }
  const product = await result.json();
  return { product };
}

export default modifyRatingProduct;
