
const product = `
  type promotionsType {
    typePromo: String
    startDatePromotion: Float
    endDatePromotion: Float
    value: Int
    label: String
  }

  input inputPromotionsType {
    typePromo: String
    startDatePromotion: Float
    endDatePromotion: Float
    value: Int
    label: String
  }

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
    promotions: promotionsType
    isPromo: Boolean
  }

  input ProductInput {
    name: String
    brand: String
    price: Float
    quantity: Int
    description: String
    categoryId: String
    image: String
    promotions: inputPromotionsType
    isPromo: Boolean
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
