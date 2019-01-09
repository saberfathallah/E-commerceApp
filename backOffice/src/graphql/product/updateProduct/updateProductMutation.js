import gql from 'graphql-tag';
export default gql`
  mutation updateProductMutation($input: ProductInput, $id: ID!) {
    updateProduct(input: $input, id: $id){
      product {
        name
      }
      error
    }
  }
`;
