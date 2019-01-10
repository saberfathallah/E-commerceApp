/* eslint no-param-reassign: "error" */

function addOrUpdateItem(items, item) {
  const index = items.findIndex(i => String(i.productId) === item.productId);

  if (index === -1) {
    items.push(item);
  } else {
    items[index].quantity += item.quantity;
  }
}

export default addOrUpdateItem;
