
const order = `
type Order {
  _id: ID
  adress: String
  total: Int
  items: [itemOrder]
}

type itemOrder {
  productId: ID
  quantity: Int
}

input itemOrderInput {
  productId: ID
  quantity: Int
}

input orderInput {
  adress: String
  total: Int
  items: [itemOrderInput]
}

type ordersResultType {
  error: String
  orders: [Order]
}

type orderResultType  {
  error: String
  order: Order
}
`;
export default [order];
