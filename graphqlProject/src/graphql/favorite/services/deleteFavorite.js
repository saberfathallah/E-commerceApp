import fetch from 'node-fetch';

async function deleteFavoriteMicroService(productId, userid) {
  const url = `${process.env.CART_AND_LISTS_SERVICES}/favorites`;
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

async function deleteFavorite(productId, userid) {
  const result = await deleteFavoriteMicroService(productId, userid);
  if (result.status !== 200) {
    return { error: 'error delete favorite' };
  }
  return { success: 'success deleted favorite' };
}

export default deleteFavorite;
