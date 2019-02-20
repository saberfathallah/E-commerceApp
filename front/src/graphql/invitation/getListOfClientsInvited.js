import gql from 'graphql-tag';

const LIST_OF_CLIENTS_INVITED = gql`
query {
  getListOfClientsInvited {
    invitations {
      idInvited
    }
    error
  }
}
`;

export default LIST_OF_CLIENTS_INVITED;
