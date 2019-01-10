import Joi from 'joi';
import validateUserId from '../../utils/validateUserId';
import validateSchema from '../../utils/validateSchema';
import updateItemQuantityService from '../../services/cart/updateItemQuantityService';

Joi.objectId = require('joi-objectid')(Joi);

const schema = Joi.object().keys({
  productId: Joi.objectId(),
  quantity: Joi.number().strict().integer().required(),
});

async function updateItemQuantity(req, res) {
  validateUserId(req, res);

  const cartItem = req.body;
  validateSchema(res, cartItem, schema);

  try {
    const { userid: userId } = req.headers;
    const cart = await updateItemQuantityService(userId, cartItem);
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export default updateItemQuantity;
