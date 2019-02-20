
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

type statOrder {
  id: ID
  count: Int
  name: String
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

type billsEditType {
  base64: String
}
`;
export default [order];
