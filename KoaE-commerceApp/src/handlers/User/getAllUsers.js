import User from '../../db/models/user';
import validateUserId from '../../utils/validateUserId';

async function getAllUsers(ctx) {
  validateUserId(ctx);
  try {
    const users = await User.find({
      type: { $in: ['admin', 'superAdmin'] },
    });
    ctx.body = users;
    ctx.status = 200;
  } catch (err) {
    ctx.throw(500, err);
  }
}

export default getAllUsers;
