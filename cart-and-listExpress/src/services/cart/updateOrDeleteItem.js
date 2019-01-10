/* eslint no-param-reassign: "error" */

function updateOrDeleteItem(items, item) {
  const index = items.findIndex(i => String(i.productId) === item.productId);

  if (index === -1) {
    return;
  }
  if (item.quantity !== 0) {
    items[index].quantity = item.quantity;
  } else {
    items.splice(index, 1);
  }
}

export default updateOrDeleteItem;
