import Cart from '../../db/models/cart';

function removeItem(userId, item) {
  const items = Object.assign({}, {
    productId: { $in: item },
  });

  return Cart.update(
    { userId },
    {
      $pull: {
        items,
      },
    },
  );
}

export default removeItem;
