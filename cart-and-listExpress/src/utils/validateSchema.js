import Joi from 'joi';

export default function validateSchema(res, data, schema) {
  Joi.validate(data, schema, (error) => {
    if (error) {
      res.status(400).json({ error: 'verify params' });
      throw new Error('verify params');
    }
  });
}
