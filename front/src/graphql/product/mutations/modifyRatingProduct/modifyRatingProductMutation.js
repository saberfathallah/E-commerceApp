import gql from 'graphql-tag';

export default gql`
  mutation modifyRatingProductMutation($id: ID!, $rate: Int) {
    modifyRatingProduct(id: $id, rate: $rate){
      product {
        userRateCount
        rate
      }
      error
    }
  }
`;
