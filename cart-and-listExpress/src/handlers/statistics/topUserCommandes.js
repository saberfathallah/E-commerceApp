import Order from '../../db/models/order';
import validateUserId from '../../utils/validateUserId';

async function topUserCommandes(req, res) {
  validateUserId(req, res);
  try {
    const ordersStat = await Order.aggregate([
      {
        $group: {
          _id: '$userId',
          count: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(ordersStat);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export default topUserCommandes;
