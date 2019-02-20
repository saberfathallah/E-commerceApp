import { graphql } from 'react-apollo';
import REFUSE_INVITATION_MUTATION from './refuseInvitationMutation';
import ALL_INVITATIONS from '../getAllInvitation';

const withRefuseInvitationMutation = graphql(REFUSE_INVITATION_MUTATION, {
  props: ({ mutate }) => ({
    refuseInvitationMutation: (idInvited) => mutate({
      variables: { idInvited },
      refetchQueries: [
        {
          query: ALL_INVITATIONS,
        },
      ],
    }),
  }),
});

export default withRefuseInvitationMutation;
