import React from 'react';
import PropTypes from 'prop-types';
import { includes } from 'lodash';
import { Button } from 'semantic-ui-react';
import { compose } from 'react-apollo';
import withSendInvitationMutation from '../../graphql/invitation/sendInvitation/withSendInvitationMutation';
import withAnnulateInvitationMutation from '../../graphql/invitation/annulateInvitation/withAnnulateInvitationMutation';


function AddOrRemoveFriend({
  sendInvitationMutation, id, allInvitedIds, annulateInvitationMutation,
}) {
  const isInvited = includes(allInvitedIds, id);

  const sendOrAnnulate = async () => {
    if (isInvited) {
      await annulateInvitationMutation(id);
    } else {
      await sendInvitationMutation(id);
    }
  };
  return (
    <Button
      color={isInvited ? 'red' : 'green'}
      onClick={() => sendOrAnnulate()}
    >
      {isInvited ? 'supprimer invitation' : 'envoyer invitation'}
    </Button>);
}

AddOrRemoveFriend.propTypes = {
  sendInvitationMutation: PropTypes.func,
  annulateInvitationMutation: PropTypes.func,
  id: PropTypes.string,
  allInvitedIds: PropTypes.array,
};

export default compose(
  withAnnulateInvitationMutation,
  withSendInvitationMutation,
)(AddOrRemoveFriend);
