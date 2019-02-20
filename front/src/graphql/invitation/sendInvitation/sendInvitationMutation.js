import gql from 'graphql-tag';

export default gql`
  mutation sendInvitationMutation($idInvited: ID!) {
    sendInvitation(idInvited: $idInvited){
      success
      error
    }
  }
`;

