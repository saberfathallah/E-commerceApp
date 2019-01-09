
export default function validateUserId(req, res) {
  const { userid } = req.headers;
  if (!userid) {
    res.status(422).json({ error: 'error authentification' });
    throw new Error('error authentification');
  }
}
