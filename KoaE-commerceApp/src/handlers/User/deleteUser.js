import User from '../../db/models/user';
import validateUserId from '../../utils/validateUserId';

async function deleteUser(ctx) {
  validateUserId(ctx);
  const { userId } = ctx.request.body;
  try {
    const user = await User.findOne({ _id: userId });
    if (!user) {
      ctx.status = 401;
    } else {
      await User.deleteOne({ _id: userId });
      ctx.status = 200;
    }
  } catch (err) {
    ctx.throw(500, err);
  }
}

export default deleteUser;
