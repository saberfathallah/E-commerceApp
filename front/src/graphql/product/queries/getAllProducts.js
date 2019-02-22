import gql from 'graphql-tag';

export default gql`
  query getProducts {
    getAllProducts {
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
