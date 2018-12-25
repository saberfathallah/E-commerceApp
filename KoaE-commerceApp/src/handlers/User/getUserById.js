import User from '../../db/models/user';
import validateUserId from '../../utils/validateUserId';

async function getUserById(ctx, userId) {
  validateUserId(ctx);
  if (userId.match(/^[0-9a-fA-F]{24}$/)) {
    try {
      const user = await User.findOne({ _id: userId });
      if (user) {
        ctx.body = user;
        ctx.status = 200;
      } else {
        ctx.body = { error: 'user not found' };
        ctx.status = 401;
      }
    } catch (err) {
      ctx.throw(500, err);
    }
  } else {
    ctx.body = { error: 'user not found' };
    ctx.status = 401;
  }
}

export default getUserById;
