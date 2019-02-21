import Product from '../../db/models/product';

async function getTopSales(ctx) {
  try {
    const products = await Product.find().sort({ topSales: -1 }).limit(5);
    ctx.body = products;
    ctx.status = 200;
  } catch (err) {
    ctx.throw(500, err);
  }
}

export default getTopSales;
