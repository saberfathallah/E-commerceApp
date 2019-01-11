import { map } from 'lodash';
import getProductById from '../../product/services/getProductById';

async function getItemsCurrentCart(ids) {
  const items = await Promise.all(map(ids, async (id) => {
    const elm = await getProductById(id);
    return elm.product;
  }));
  return { items };
}

export default getItemsCurrentCart;
