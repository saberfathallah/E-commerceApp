import Joi from 'joi';
import validateSchema from '../../utils/validateSchema';
import validateUserId from '../../utils/validateUserId';
import addProduct from '../../services/cart/addProduuct';

Joi.objectId = require('joi-objectid')(Joi);

const schema = Joi.object().keys({
  productId: Joi.objectId(),
  quantity: Joi.number().strict().integer().required(),
});

async function addProductToCart(req, res) {
  validateUserId(req, res);
  const data = req.body;
  validateSchema(res, data, schema);

  const { userid: userId } = req.headers;

  const cart = await addProduct(userId, data);

  res.status(200).json({ cart });
}

export default addProductToCart;
