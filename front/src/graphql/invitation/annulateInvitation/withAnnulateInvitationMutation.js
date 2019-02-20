import { graphql } from 'react-apollo';
import ANNULATE_INVITATION_MUTATION from './annulateInvitationMutation';
import LIST_OF_CLIENTS_INVITED from '../getListOfClientsInvited';

const withAnnulateInvitationMutation = graphql(ANNULATE_INVITATION_MUTATION, {
  props: ({ mutate }) => ({
    annulateInvitationMutation: (idInvited) => mutate({
      variables: { idInvited },
      refetchQueries: [
        {
          query: LIST_OF_CLIENTS_INVITED,
        },
      ],
    }),
  }),
});

export default withAnnulateInvitationMutation;
