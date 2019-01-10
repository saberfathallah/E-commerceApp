import Joi from 'joi';
import validateSchema from '../../utils/validateSchema';
import validateUserId from '../../utils/validateUserId';
import modifyOrRemoveItemFromCart from '../../services/cart/modifyOrRemoveItemFromCart';

Joi.objectId = require('joi-objectid')(Joi);

const schema = Joi.object().keys({
  productId: Joi.objectId(),
  quantity: Joi.number().strict().integer().required(),
});

async function updateQuantityOrRemoveProduct(req, res) {
  validateUserId(req, res);
  const data = req.body;
  validateSchema(res, data, schema);
  try {
    const { userid: userId } = req.headers;
    const cart = await modifyOrRemoveItemFromCart(userId, data);
    res.status(200).json({ cart });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export default updateQuantityOrRemoveProduct;
