import Joi from 'joi';
import validateSchema from '../../utils/validateSchema';
import validateUserId from '../../utils/validateUserId';
import addProduct from '../../services/cart/addProduuct';

Joi.objectId = require('joi-objectid')(Joi);

const schema = Joi.object().keys({
  productId: Joi.objectId(),
  quantity: Joi.number().strict().integer().required(),
  price: Joi.number().strict().integer().required(),
});

async function addProductToCart(req, res) {
  validateUserId(req, res);
  const data = req.body;
  validateSchema(res, {
    productId: data.productId, quantity: data.quantity, price: data.price,
  }, schema);
  try {
    const { userid: userId } = req.headers;
    const cart = await addProduct(userId, data);
    res.status(200).json({ cart });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export default addProductToCart;
