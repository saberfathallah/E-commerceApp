
const cart = `
type itemCart {
  productId: ID
  quantity: Int
  price: Float
  isPromo: Boolean
  promotionPrice: Float
}
type Cart {
  userId: ID
  total: Float
  totalWithPromotion: Float
  items: [itemCart]
}

type cartResultType {
  error: String
  cart: Cart
}

type itemsCartResultType {
  error: String
  items: [Product]
}

`;
export default [cart];
