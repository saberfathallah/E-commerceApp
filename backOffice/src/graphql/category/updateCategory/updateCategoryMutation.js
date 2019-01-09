import gql from 'graphql-tag';
export default gql`
  mutation updateCategoryMutation($input: CategoryInput, $id: ID!) {
    updateCategory(input: $input, id: $id){
      category {
        name
      }
      error
    }
  }
`;
