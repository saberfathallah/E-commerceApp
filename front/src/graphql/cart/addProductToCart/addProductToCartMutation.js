import gql from 'graphql-tag';
export default gql`
  mutation addProductToCartMutation($productId: ID!, $quantity: Int, $price: Float, $isPromo: Boolean, $promotionPrice: Float) {
    addProductToCart(productId: $productId, quantity: $quantity, price: $price, isPromo: $isPromo, promotionPrice: $promotionPrice){
      cart {
        total
      }
      error
    }
  }
`;
