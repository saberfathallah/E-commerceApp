
import Joi from 'joi';
import Product from '../../db/models/product';
import validateSchema from '../../utils/validateSchema';
import validateUserId from '../../utils/validateUserId';

const schema = Joi.object().keys({
  name: Joi.string(),
  brand: Joi.string(),
  price: Joi.number().strict(),
  quantity: Joi.number().strict().integer(),
  image: Joi.string(),
  description: Joi.string(),
  categoryId: Joi.string(),
});

async function addProduct(ctx) {
  validateUserId(ctx);
  const { data } = ctx.request.body;
  validateSchema(ctx, data, schema);

  try {
    const newProduct = await Product.create({
      name: data.name,
      brand: data.brand,
      price: data.price,
      image: data.image,
      quantity: data.quantity,
      description: data.description,
      categoryId: data.categoryId,
    });
    ctx.body = newProduct;
    ctx.status = 200;
  } catch (err) {
    ctx.throw(500, err);
  }
  return ctx;
}

export default addProduct;
