
import Invitation from '../../db/models/invitation';
import validateUserId from '../../utils/validateUserId';

async function acceptInvitation(ctx) {
  validateUserId(ctx);
  const { idInvited } = ctx.request.body;
  const { userid } = ctx.request.header;

  try {
    let inv = await Invitation.findOne({ idInvited: userid, id: idInvited });
    inv.status = 'valid';
    await inv.save();
    ctx.body = { success: 'success add friend ' };
    ctx.status = 200;
  } catch (err) {
    ctx.throw(500, err);
  }
  return ctx;
}

export default acceptInvitation;
