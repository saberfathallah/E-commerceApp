
import Invitation from '../../db/models/invitation';
import validateUserId from '../../utils/validateUserId';

async function annulateInvitation(ctx) {
  validateUserId(ctx);
  const { idInvited } = ctx.request.body;
  const { userid } = ctx.request.header;
  try {
    await Invitation.remove({
      idInvited,
      id: userid,
    });
    ctx.body = { success: 'success remove invitation' };
    ctx.status = 200;
  } catch (err) {
    ctx.throw(500, err);
  }
  return ctx;
}

export default annulateInvitation;
