import gql from 'graphql-tag';

export default gql`
query getProductByIdCategory($id: ID!) {
  getProductsByCategoryId(id: $id) {
    products {
      name
      description
      price
      quantity
      image
      rate
      userRateCount
      _id
    }
    error
  }
}
`;
