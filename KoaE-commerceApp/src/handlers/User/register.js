
import bcrypt from 'bcrypt';
import Joi from 'joi';
import User from '../../db/models/user';
import validateSchema from '../../utils/validateSchema';

const schema = Joi.object().keys({
  firstName: Joi.string(),
  lastName: Joi.string(),
  age: Joi.number().strict().integer(),  
  type: Joi.string(),
  adress: Joi.string(),
  mail: Joi.string(),
  password: Joi.string(),
});

async function register(ctx) {
  const { data } = ctx.request.body
  validateSchema(ctx, data, schema); 

  try {
    const passwordHash = bcrypt.hashSync(data.password, 10);    
    const newUser = await User.create({
      firstName: data.firstName,
      lastName: data.lastName,
      age: data.age,
      type: data.type,
      adress: data.adress,
      mail: data.mail,
      password: passwordHash,
    });
    ctx.body = newUser;
    ctx.status = 200;
  } catch (err) {
    ctx.throw(500, err);    
  }
  return ctx;
}

export default register;
