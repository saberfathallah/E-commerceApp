
import fetch from 'node-fetch';

async function addFavoriteMicroServices(productId, userid) {
  const url = `${process.env.CART_AND_LISTS_SERVICES}/favorites`;
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify({ productId }),
    headers: {
      userid,
      'Content-Type': 'application/json',
    },
  });
}

async function addFavorite(productId, userid) {
  const result = await addFavoriteMicroServices(productId, userid);
  if (result.status !== 200) {
    return { error: 'error cannot add favorite' };
  }
  const favorite = await result.json();
  return { favorite };
}

export default addFavorite;
