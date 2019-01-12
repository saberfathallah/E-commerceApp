import Order from '../../db/models/order';
import validateUserId from '../../utils/validateUserId';

async function getAllOrders(req, res) {
  validateUserId(req, res);
  const { userid: userId } = req.headers;
  try {
    const orders = await Order.find({ userId });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export default getAllOrders;
