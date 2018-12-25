import Joi from 'joi';
import Product from '../../db/models/product';
import validateUserId from '../../utils/validateUserId';
import validateSchema from '../../utils/validateSchema';

const schema = Joi.object().keys({
  name: Joi.string(),
  brand: Joi.string(),
  price: Joi.number().strict(),
  quantity: Joi.number().strict().integer(),
  image: Joi.string(),
  description: Joi.string(),
  categoryId: Joi.string(),
});

async function updateProduct(ctx, productId) {
  validateUserId(ctx);
  const { data } = ctx.request.body;
  validateSchema(ctx, data, schema);

  if (productId.match(/^[0-9a-fA-F]{24}$/)) {
    try {
      const product = await Product.findOneAndUpdate(
        { _id: productId },
        { $set: data },
        { new: true },
      );
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

export default updateProduct;
