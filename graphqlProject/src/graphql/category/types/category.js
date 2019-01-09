
const category = `
  type Category {
    name: String
    parentId: String
    level: Int
    productsDetails: productsDetails
    categoriesDetails: categoriesDetails
    _id: ID
  }

  type productsDetails {
    products: productsResultType
    numberOfProducts: Int,
  }

  type categoriesDetails {
    categories: categoriesResultType
    numberOfCategories: Int
  }

  input CategoryInput {
    name: String
    parentId: String
    level: Int
  }

  type categoryResultType {
    error: String
    category: Category
  }

  type categoriesResultType {
    error: String
    categories: [Category]
  }
`;
export default [category];
