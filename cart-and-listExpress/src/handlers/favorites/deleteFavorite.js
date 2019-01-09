import Joi from 'joi';
import Favorite from '../../db/models/favorite';
import validateSchema from '../../utils/validateSchema';
import validateUserId from '../../utils/validateUserId';

Joi.objectId = require('joi-objectid')(Joi);

const schema = Joi.object().keys({
  productId: Joi.objectId(),
});

async function deleteFavorite(req, res) {
  validateUserId(req, res);
  const data = req.body;
  validateSchema(res, data, schema);
  try {
    const favorite = await Favorite.findOne({
      productId: data.productId,
      userId: req.headers.userid,
    });

    if (!favorite) {
      return res.status(400).json({ error: 'cannot found product' });
    }

    await Favorite.deleteOne({
      productId: data.productId,
      userId: req.headers.userid,
    });

    return res.status(200).json({ message: 'success delete favorite' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export default deleteFavorite;
