import { graphql } from 'react-apollo';
import ACCEPT_INVITATION_MUTATION from './acceptInvitationMutation';
import ALL_INVITATIONS from '../getAllInvitation';

const withAcceptInvitationMutation = graphql(ACCEPT_INVITATION_MUTATION, {
  props: ({ mutate }) => ({
    acceptInvitationMutation: (idInvited) => mutate({
      variables: { idInvited },
      refetchQueries: [
        {
          query: ALL_INVITATIONS,
        },
      ],
    }),
  }),
});

export default withAcceptInvitationMutation;
