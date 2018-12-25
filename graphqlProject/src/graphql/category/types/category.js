
const category =`
  type Category {
    name: String
    parent_id: String
    level: Int
  }

  input CategoryInput {
    name: String
    parent_id: String
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