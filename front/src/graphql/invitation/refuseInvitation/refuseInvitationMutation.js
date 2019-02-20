import gql from 'graphql-tag';

export default gql`
  mutation refuseInvitationMutation($idInvited: ID!) {
    refuseInvitation(idInvited: $idInvited){
      success
      error
    }
  }
`;

