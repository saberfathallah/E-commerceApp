import gql from 'graphql-tag';

const ALL_INVITATIONS = gql`
query getAllInvitation {
    getAllInvitation{
      error
      users {
        firstName
        _id
      }
    }
  }
`;

export default ALL_INVITATIONS;
