import gql from 'graphql-tag';
export default gql`
  mutation addProductToCartMutation($productId: ID!, $quantity: Int, $price: Float) {
    addProductToCart(productId: $productId, quantity: $quantity, price: $price){
      cart {
        total
      }
      error
    }
  }
`;
