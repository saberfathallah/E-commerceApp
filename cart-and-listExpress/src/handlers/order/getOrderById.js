import Joi from 'joi';
import Order from '../../db/models/order';
import validateSchema from '../../utils/validateSchema';
import validateUserId from '../../utils/validateUserId';

Joi.objectId = require('joi-objectid')(Joi);


const schema = Joi.object({
  orderId: Joi.objectId(),
}).required();

async function getOrderById(req, res) {
  validateUserId(req, res);

  const data = req.params;
  validateSchema(res, data, schema);
  const { userid: userId } = req.headers;
  try {
    const order = await Order.findOne({
      _id: data.orderId,
      userId,
    });
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export default getOrderById;
