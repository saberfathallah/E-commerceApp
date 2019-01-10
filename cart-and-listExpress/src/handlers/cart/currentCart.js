import findOrCreateCart from '../../services/cart/findOrCreateCart';
import validateUserId from '../../utils/validateUserId';

async function currentCart(req, res) {
  validateUserId(req, res);
  const { userid: userId } = req.headers;
  try {
    const cart = await findOrCreateCart(userId);
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export default currentCart;
