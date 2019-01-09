import gql from 'graphql-tag';
export default gql`
  mutation addCategoryMutation($input: CategoryInput) {
    addCategory(input: $input){
      category {
        name
      }
      error
    }
  }
`;
