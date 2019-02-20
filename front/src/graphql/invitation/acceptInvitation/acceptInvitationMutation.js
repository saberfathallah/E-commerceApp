import gql from 'graphql-tag';

export default gql`
  mutation acceptInvitationMutation($idInvited: ID!) {
    acceptInvitation(idInvited: $idInvited){
      success
      error
    }
  }
`;

