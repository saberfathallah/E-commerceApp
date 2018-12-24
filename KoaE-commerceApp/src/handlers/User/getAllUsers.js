import User from '../../db/models/user';

async function getAllUsers(ctx) {
  try {
    const users = await User.find();
    ctx.body = users;
    ctx.status = 200;
  } catch (err) {
    ctx.throw(500, err);
  }
}

export default getAllUsers;
