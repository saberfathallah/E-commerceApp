import { graphql } from 'react-apollo';
import SEND_INVITATION_MUTATION from './sendInvitationMutation';
import LIST_OF_CLIENTS_INVITED from '../getListOfClientsInvited';

const withSendInvitationMutation = graphql(SEND_INVITATION_MUTATION, {
  props: ({ mutate }) => ({
    sendInvitationMutation: (idInvited) => mutate({
      variables: { idInvited },
      refetchQueries: [
        {
          query: LIST_OF_CLIENTS_INVITED,
        },
      ],
    }),
  }),
});

export default withSendInvitationMutation;
