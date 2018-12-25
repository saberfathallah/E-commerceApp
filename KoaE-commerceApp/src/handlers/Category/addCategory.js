
import Joi from 'joi';
import Category from '../../db/models/category';
import validateSchema from '../../utils/validateSchema';
import validateUserId from '../../utils/validateUserId';

const schema = Joi.object().keys({
  name: Joi.string(),
  parentId: Joi.string(),
  level: Joi.number().strict().integer(),
});

async function addCategory(ctx) {
  validateUserId(ctx);
  const { data } = ctx.request.body;
  validateSchema(ctx, data, schema);

  try {
    const newCategory = await Category.create({
      name: data.name,
      level: data.level,
      parentId: data.parentId,
    });
    ctx.body = newCategory;
    ctx.status = 200;
  } catch (err) {
    ctx.throw(500, err);
  }
  return ctx;
}

export default addCategory;
