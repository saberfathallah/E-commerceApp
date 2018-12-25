import Product from '../../db/models/product';
import validateUserId from '../../utils/validateUserId';

async function getAllProducts(ctx) {
  validateUserId(ctx);
  try {
    const products = await Product.find();
    ctx.body = products;
    ctx.status = 200;
  } catch (err) {
    ctx.throw(500, err);
  }
}

export default getAllProducts;
