import Product from '../../db/models/product';

async function modifyTopSales(ctx, productId) {
  if (productId.match(/^[0-9a-fA-F]{24}$/)) {
    const { rate } = ctx.request.body;
    try {
      const product = await Product.findOne({ _id: productId });
      product.rate = product.userRateCount === 0 ? (rate + product.rate) / 1 : (rate + product.rate) / 2;
      product.userRateCount += 1;
      await product.save();
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

export default modifyTopSales;
