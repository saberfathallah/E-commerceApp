import Product from '../../db/models/product';

async function getProductById(ctx, productId) {
  if (productId.match(/^[0-9a-fA-F]{24}$/)) {
    try {
      const product = await Product.findOne({ _id: productId });
      if (product) {
        ctx.body = product;
        ctx.status = 200;
      } else {
        ctx.body = { error: 'product not found' };
        ctx.status = 401;
      }
    } catch (err) {
      ctx.throw(500, err);
    }
  } else {
    ctx.body = { error: 'product not found' };
    ctx.status = 401;
  }
}

export default getProductById;
