import gql from 'graphql-tag';
export default gql`
  mutation removeCategoryMutation($id: ID!) {
    deleteCategory(id: $id){
      success
      error
    }
  }
`;
