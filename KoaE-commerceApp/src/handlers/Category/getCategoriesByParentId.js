import Category from '../../db/models/category';

async function getCategoriesByParentId(ctx, categoryId) {
  if (categoryId.match(/^[0-9a-fA-F]{24}$/)) {
    try {
      const categories = await Category.find({ parentId: categoryId });
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

export default getCategoriesByParentId;
