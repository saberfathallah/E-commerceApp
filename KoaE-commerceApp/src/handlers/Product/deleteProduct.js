import Product from '../../db/models/product';
import validateUserId from '../../utils/validateUserId';

async function deleteProduct(ctx) {
  validateUserId(ctx);
  const { productId } = ctx.request.body;
  try {
    const product = await Product.findOne({ _id: productId });
    if (!product) {
      ctx.status = 401;
    } else {
      await Product.deleteOne({ _id: productId });
      ctx.status = 200;
    }
  } catch (err) {
    ctx.throw(500, err);
  }
}

export default deleteProduct;
