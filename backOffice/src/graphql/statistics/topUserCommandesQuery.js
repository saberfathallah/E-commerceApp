import gql from 'graphql-tag';

const TOPUSERCOMMANDERS = gql`
query {
  topUserCommandes {
    name
    count
  }
}
`;

export default TOPUSERCOMMANDERS;
