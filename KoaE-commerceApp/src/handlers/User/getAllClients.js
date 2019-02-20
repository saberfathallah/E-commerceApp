import User from '../../db/models/user';
import validateUserId from '../../utils/validateUserId';

async function getAllClients(ctx) {
  validateUserId(ctx);
  try {
    const cliens = await User.find({ type: 'client' });
    ctx.body = cliens;
    ctx.status = 200;
  } catch (err) {
    ctx.throw(500, err);
  }
}

export default getAllClients;
