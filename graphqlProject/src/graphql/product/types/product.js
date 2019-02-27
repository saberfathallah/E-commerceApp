
const product = `
  type Product {
    name: String
    brand: String
    price: Float
    quantity: Int
    description: String
    categoryId: String
    image: String
    _id: ID
    topSales: Int
    userRateCount: Int
    rate: Float
    startDatePromotion: String
    endDatePromotion: String
  }

  input ProductInput {
    name: String
    brand: String
    price: Float
    quantity: Int
    description: String
    categoryId: String
    image: String
    startDatePromotion: Float
    endDatePromotion: Float
  }

  type productResultType {
    error: String
    product: Product
  }

  type productsResultType {
    error: String
    products: [Product]
  }

  type productDeletedType  {
    success: String
    error: String
  }
`;
export default [product];
