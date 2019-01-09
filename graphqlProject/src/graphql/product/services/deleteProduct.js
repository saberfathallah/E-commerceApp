import fetch from 'node-fetch';

async function deleteProductMicroService(productId, userid) {
  const url = `${process.env.BACK_END_SERVICES}/products`;
  const data = await fetch(url, {
    method: 'DELETE',
    body: JSON.stringify({ productId }),
    headers: {
      userid,
      'Content-Type': 'application/json',
    },
  });
  return data;
}

async function deleteProduct(productId, userid) {
  const result = await deleteProductMicroService(productId, userid);
  if (result.status !== 200) {
    return { error: 'error delete product ' };
  }
  return { success: 'success deleted product' };
}

export default deleteProduct;
