import Category from '../../db/models/category';
import validateUserId from '../../utils/validateUserId';

async function getCategoryById(ctx, categoryId) {
  validateUserId(ctx);
  if (categoryId.match(/^[0-9a-fA-F]{24}$/)) {
    try {
      const category = await Category.findOne({ _id: categoryId });
      if (category) {
        ctx.body = category;
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

export default getCategoryById;
