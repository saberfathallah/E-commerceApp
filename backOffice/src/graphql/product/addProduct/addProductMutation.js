import gql from 'graphql-tag';
export default gql`
  mutation addProductMutation($input: ProductInput) {
    addProduct(input: $input){
      product {
        name
      }
      error
    }
  }
`;
