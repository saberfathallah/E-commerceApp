
const product = `
  type Product {
    name: String
    brand: String
    price: Float
    quantity: Int
    description: String
    categoryId: String
    image: String
  }

  input ProductInput {
    name: String
    brand: String
    price: Float
    quantity: Int
    description: String
    categoryId: String
    image: String
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
