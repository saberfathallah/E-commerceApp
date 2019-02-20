import Invitation from '../../db/models/invitation';
import validateUserId from '../../utils/validateUserId';

async function getListOfClientsInvited(ctx) {
  validateUserId(ctx);
  const { userid } = ctx.request.header;

  try {
    const cliensInvited = await Invitation.find({ id: userid });
    ctx.body = cliensInvited;
    ctx.status = 200;
  } catch (err) {
    ctx.throw(500, err);
  }
}

export default getListOfClientsInvited;
