import Joi from 'joi';
import Order from '../../../db/models/order';
import validateSchema from '../../../utils/validateSchema';
import validateUserId from '../../../utils/validateUserId';
import createHtml from './createHtml/index';
import createPDF from './createPDF';

Joi.objectId = require('joi-objectid')(Joi);


const schema = Joi.object({
  orderId: Joi.objectId(),
}).required();

async function billsEdit(req, res) {
  validateUserId(req, res);

  const data = req.params;
  validateSchema(res, data, schema);
  const { userid: userId } = req.headers;
  try {
    const order = await Order.findOne({
      _id: data.orderId,
      userId,
    });
    const html = await createHtml(order);
    const base64 = await createPDF(html);
    res.status(200).json(base64);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export default billsEdit;
