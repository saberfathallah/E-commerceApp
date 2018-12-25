
const category =`
  type Category {
    name: String
    parentId: String
    level: Int
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