import gql from 'graphql-tag';

const TOP_SALES = gql`
query {
    getTopSales {
    products {
      name
      topSales
    }
    error
  }
}
`;

export default TOP_SALES;
