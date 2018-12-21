import bcrypt from 'bcrypt';
import Joi from 'joi';
import User from '../../db/models/user';
import validateSchema from '../../utils/validateSchema';

const schema = Joi.object().keys({
  mail: Joi.string(),
  password: Joi.string(),
});

async function login(ctx) {
  validateSchema(ctx, ctx.request.body, schema);
  const { mail, password } = ctx.request.body;
  try {
    const user = await User.findOne({ mail });
    if (!user || !bcrypt.compareSync(password, user.password)) {
      ctx.body = { error: 'user not found' };
      ctx.status = 401;
    } else {
      ctx.body = user;
      ctx.status = 200;
    }
  } catch (err) {
    ctx.throw(500, err);
  }
}

export default login;
