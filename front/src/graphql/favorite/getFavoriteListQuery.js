import gql from 'graphql-tag';

const FAVORITE_LIST = gql`
query {
  getFavoriteList {
    error
    favorites {
       productId
    }
  }
}
`;

export default FAVORITE_LIST;
