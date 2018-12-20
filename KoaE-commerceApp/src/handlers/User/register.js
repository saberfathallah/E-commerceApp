
import User from '../../db/models/user';

async function register(ctx) {
  const { data } = ctx.request.body
  try {
    const newUser = await User.create({
      firstName: data.firstName,
      lastName: data.lastName,
      age: data.age,
      type: data.type,
      adress: data.adress,
      mail: data.mail,
      password: data.password,
    });
    ctx.body = newUser;
    ctx.status = 200;
  } catch (err) {
    ctx.throw(500, err);    
  }
  return ctx;
}

export default register;
