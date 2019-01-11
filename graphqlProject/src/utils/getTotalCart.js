import { get, reduce } from 'lodash';

function getTotalCart(cart) {
  const items = get(cart, 'items', []);
  const total = reduce(items, (tot, item) => tot + (item.price * item.quantity), 0);
  return total;
}

export default getTotalCart;
