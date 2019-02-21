import fetch from 'node-fetch';

async function getTopSalesMicroService() {
  const url = `${process.env.BACK_END_SERVICES}/products`;
  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

async function getTopSales() {
  const result = await getTopSalesMicroService();
  if (result.status !== 200) {
    return { error: 'error cannot getTopSales' };
  }
  const topSales = await result.json();
  return { products: topSales };
}

export default getTopSales;
