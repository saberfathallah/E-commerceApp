import Invitation from '../../db/models/invitation';
import validateUserId from '../../utils/validateUserId';

async function getAllInvitation(ctx) {
  validateUserId(ctx);
  const { userid } = ctx.request.header;

  try {
    const invitations = await Invitation.find({ idInvited: userid, status: 'waitting' });
    ctx.body = invitations;
    ctx.status = 200;
  } catch (err) {
    ctx.throw(500, err);
  }
}

export default getAllInvitation;
