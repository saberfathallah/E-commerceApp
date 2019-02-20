
import Invitation from '../../db/models/invitation';
import validateUserId from '../../utils/validateUserId';

async function sendInvitation(ctx) {
  validateUserId(ctx);
  const { idInvited } = ctx.request.body;
  const { userid } = ctx.request.header;
  try {
    await Invitation.create({
      idInvited,
      id: userid,
      status: 'waitting',
    });
    ctx.body = { success: 'success invitet user ' };
    ctx.status = 200;
  } catch (err) {
    ctx.throw(500, err);
  }
  return ctx;
}

export default sendInvitation;
