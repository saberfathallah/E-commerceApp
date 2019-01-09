import gql from 'graphql-tag';

const ALL_CATEGORIES = gql`
query {
  getAllCategories(hasLevel: true) {
    categories {
      name
      level
      _id
      categoriesDetails {
        categories {
          categories {
            name
            _id
          }
        }
      }
    }
    error
  }
}
`;

export default ALL_CATEGORIES;
