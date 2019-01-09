// import Joi from 'joi';
import Category from '../../db/models/category';
import validateUserId from '../../utils/validateUserId';
// import validateSchema from '../../utils/validateSchema';

// const schema = Joi.object().keys({
//   name: Joi.string(),
//   level: Joi.number().strict().integer(),
//   parentId: Joi.string(),
// });

async function updateCategory(ctx, categoryId) {
  validateUserId(ctx);
  const { data } = ctx.request.body;
  // validateSchema(ctx, data, schema);

  if (categoryId.match(/^[0-9a-fA-F]{24}$/)) {
    try {
      const category = await Category.findOneAndUpdate(
        { _id: categoryId },
        { $set: data },
        { new: true },
      );
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
    ctx.body = { error: 'categry not found' };
    ctx.status = 401;
  }
}

export default updateCategory;
