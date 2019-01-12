import gql from 'graphql-tag';

export default gql`
query getOrderById($orderId: ID!) {
  getOrderById(orderId: $orderId) {
    order {
      _id
      adress
      total
      items {
        productId
        quantity
      }
    }
    error
  }
}
`;
