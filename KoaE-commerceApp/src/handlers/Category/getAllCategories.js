import Category from '../../db/models/category';
import validateUserId from '../../utils/validateUserId';

async function getAllCategories(ctx) {
  validateUserId(ctx);
  try {
    const categoris = await Category.find();
    ctx.body = categoris;
    ctx.status = 200;
  } catch (err) {
    ctx.throw(500, err);
  }
}

export default getAllCategories;
