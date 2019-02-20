import Invitation from '../../db/models/invitation';
import validateUserId from '../../utils/validateUserId';

async function getListOfFriends(ctx) {
  validateUserId(ctx);
  const { userid } = ctx.request.header;

  try {
    const cliens = await Invitation.find({ $or: [{ id: userid, status: 'valid' }, { idInvited: userid, status: 'valid' }] });
    ctx.body = cliens;
    ctx.status = 200;
  } catch (err) {
    ctx.throw(500, err);
  }
}

export default getListOfFriends;
