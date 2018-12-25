
export default function validateUserId(ctx) {
  const { userid } = ctx.request.header;
  if (!userid) {
    ctx.throw(422, JSON.stringify({ error: 'Authentication failed' }));
  }
}
