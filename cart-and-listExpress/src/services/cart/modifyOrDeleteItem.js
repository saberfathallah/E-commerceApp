
function modifyOrDeleteItem(items, item) {
  /* eslint no-param-reassign: "error" */
  const index = items.findIndex(i => String(i.productId) === item.productId);
  if (index === -1) {
    items.push(item);
  } else {
    items[index].quantity -= item.quantity;
    if (items[index].quantity === 0) {
      items.splice(index, 1);
    }
  }
}

export default modifyOrDeleteItem;
