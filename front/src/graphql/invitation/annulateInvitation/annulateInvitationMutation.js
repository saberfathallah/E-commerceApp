import gql from 'graphql-tag';

export default gql`
  mutation annulateInvitationMutation($idInvited: ID!) {
    annulateInvitation(idInvited: $idInvited){
      success
      error
    }
  }
`;

