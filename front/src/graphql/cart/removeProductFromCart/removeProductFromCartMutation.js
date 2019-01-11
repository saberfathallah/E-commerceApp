import gql from 'graphql-tag';
export default gql`
  mutation removeProductFormCartMutation($productId: ID!) {
    removeProductFromCart(productId: $productId){
      cart {
        total
      }
      error
    }
  }
`;
