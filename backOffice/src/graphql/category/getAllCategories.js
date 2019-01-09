import gql from 'graphql-tag';

const ALL_CATEGORIES = gql`
query {
  getAllCategories {
    categories {
      name
      level
      _id
      productsDetails {
        numberOfProducts
      }
      categoriesDetails {
        numberOfCategories
      }
    }
    error
  }
}
`;

export default ALL_CATEGORIES;
