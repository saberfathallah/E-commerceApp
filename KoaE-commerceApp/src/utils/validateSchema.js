import Joi from 'joi';

export default function validateSchema(ctx, data, schema) {
  Joi.validate(data, schema, (error) => {
    if (error) {
      ctx.throw(400, {
        message: 'Invalid or missing parameters',
        errors: JSON.stringify(error),
      });
    }
  });
}
