import Product from '../../db/models/product';

async function getProductsByCategoryId(ctx, categoryId) {
  if (categoryId.match(/^[0-9a-fA-F]{24}$/)) {
    try {
      const categories = await Product.find({ categoryId });
      if (categories) {
        ctx.body = categories;
        ctx.status = 200;
      } else {
        ctx.body = { error: 'category not found' };
        ctx.status = 401;
      }
    } catch (err) {
      ctx.throw(500, err);
    }
  } else {
    ctx.body = { error: 'category not found' };
    ctx.status = 401;
  }
}

export default getProductsByCategoryId;
