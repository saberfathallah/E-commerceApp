import Product from '../../db/models/product';

async function getAllProducts(ctx) {
  try {
    const products = await Product.find();
    ctx.body = products;
    ctx.status = 200;
  } catch (err) {
    ctx.throw(500, err);
  }
}

export default getAllProducts;
