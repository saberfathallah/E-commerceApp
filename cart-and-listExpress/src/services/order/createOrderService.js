import { forEach } from 'lodash';
import Order from '../../db/models/order';

async function createOrderService(userId, data) {
  const order = await Order.create({
    userId,
    adress: data.adress,
    total: data.total,
  });
  forEach(data.items, item => order.items.push(item));
  return order.save();
}

export default createOrderService;
