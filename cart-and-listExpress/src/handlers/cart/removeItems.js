import removeItemsFromCart from '../../services/cart/removeItemsFromCart';
import validateUserId from '../../utils/validateUserId';

async function removeItems(req, res) {
  validateUserId(req, res);

  try {
    const cartItemsIds = req.body;
    const { userid: userId } = req.headers;
    const cart = await removeItemsFromCart(userId, cartItemsIds);
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export default removeItems;
