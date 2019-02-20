/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'react-apollo';
import { Button } from 'semantic-ui-react';
import withAcceptInvitationMutation from '../../graphql/invitation/acceptInvitation/withAcceptInvitationMutation';
import withRefuseInvitationMutation from '../../graphql/invitation/refuseInvitation/withRefuseInvitationMutation';

const AcceptOrRefuseInvitation = ({ id, acceptInvitationMutation, refuseInvitationMutation }) => (
  <div>
    <Button onClick={() => acceptInvitationMutation(id)}color="green">accepter</Button>
    <Button onClick={() => refuseInvitationMutation(id)} color="red">refuser</Button>
  </div>
);

AcceptOrRefuseInvitation.propTypes = {
  id: PropTypes.string,
  acceptInvitationMutation: PropTypes.func,
  refuseInvitationMutation: PropTypes.func,
};

export default compose(
  withAcceptInvitationMutation,
  withRefuseInvitationMutation
)(AcceptOrRefuseInvitation);
