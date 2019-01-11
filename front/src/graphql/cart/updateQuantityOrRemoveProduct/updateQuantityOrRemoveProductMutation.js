import gql from 'graphql-tag';
export default gql`
  mutation updateQuantityOrRemoveProductMutation($productId: ID!, $quantity: Int) {
    updateQuantityOrRemoveProductFromCart(productId: $productId, quantity: $quantity){
      cart {
        total
      }
      error
    }
  }
`;
