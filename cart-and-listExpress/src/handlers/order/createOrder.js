import Joi from 'joi';
import Cart from '../../db/models/cart';
import validateSchema from '../../utils/validateSchema';
import validateUserId from '../../utils/validateUserId';
import createOrderService from '../../services/order/createOrderService';

Joi.objectId = require('joi-objectid')(Joi);

const objectSchema = Joi.object({
  productId: Joi.objectId(),
  quantity: Joi.number().strict().integer(),
}).required();

const arraySchema = Joi.array().items(objectSchema).min(1).required();

const schema = Joi.object().keys({
  adress: Joi.string(),
  total: Joi.number().strict().integer().required(),
  items: Joi.alternatives().try(objectSchema, arraySchema),
});

async function createOrder(req, res) {
  validateUserId(req, res);
  const data = req.body;
  validateSchema(res, data, schema);
  try {
    const { userid: userId } = req.headers;
    const order = await createOrderService(userId, data);
    await Cart.remove({ userId });
    res.status(200).json({ order });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export default createOrder;
