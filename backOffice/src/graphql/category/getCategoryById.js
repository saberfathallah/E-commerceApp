import gql from 'graphql-tag';

const GET_CATEGORY_BY_ID = gql`
query getCategoryById($id: ID!) {
  getCategoryById(id: $id) {
    category {
      name
      level
      parentId
      _id
    }
    error
  }
}
`;

export default GET_CATEGORY_BY_ID;
