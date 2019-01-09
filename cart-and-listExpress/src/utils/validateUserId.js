
export default function validateUserId(res) {
    const { userid } = res.request.header;
    if (!userid) {
      ctx.status(422).json({ error : 'error authentification '});
    }
  }
  