import deleteAndRecreateCart from '../../services/cart/deleteAndRecreateCart';
import validateUserId from '../../utils/validateUserId';

async function deleteCart(req, res) {
  validateUserId(req, res);
  const { userid: userId } = req.headers;
  try {
    const cart = await deleteAndRecreateCart(userId);
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export default deleteCart;
