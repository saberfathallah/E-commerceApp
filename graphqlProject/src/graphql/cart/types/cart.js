
const cart = `
type itemCart {
  productId: ID
  quantity: Int
  price: Float
}
type Cart {
  userId: ID
  items: [itemCart]
}

type cartResultType {
  error: String
  cart: Cart
}

`;
export default [cart];
