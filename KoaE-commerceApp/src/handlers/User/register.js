
import bcrypt from 'bcrypt';
import User from '../../db/models/user';

async function register(ctx) {
  const { data } = ctx.request.body
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
