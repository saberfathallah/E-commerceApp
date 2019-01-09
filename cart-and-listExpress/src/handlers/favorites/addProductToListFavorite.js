import Joi from 'joi';
import Favorite from '../../db/models/favorite';
import validateSchema from '../../utils/validateSchema';
import validateUserId from '../../utils/validateUserId';

Joi.objectId = require('joi-objectid')(Joi);

const schema = Joi.object().keys({
  productId: Joi.objectId(),
});

async function addProductToListFavorite(req, res) {
  validateUserId(req, res);
  const data = req.body;
  validateSchema(res, data, schema);
  try {
    const favorite = await Favorite.create({
      productId: data.productId,
      userId: req.headers.userid,
    });
    return res.status(200).json(favorite);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export default addProductToListFavorite;
