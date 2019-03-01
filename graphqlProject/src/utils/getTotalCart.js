import { get, reduce } from 'lodash';

const getPrice = (item, isWithPromo) => {
  if (isWithPromo) return item.promotionPrice * item.quantity;
  return item.price * item.quantity;
};

function getTotalCart(cart, isWithPromo) {
  const items = get(cart, 'items', []);
  const total = reduce(items, (tot, item) => tot + getPrice(item, isWithPromo), 0);
  return total;
}

export default getTotalCart;
