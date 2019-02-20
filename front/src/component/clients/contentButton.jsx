import React from 'react';
import PropTypes from 'prop-types';
import AddOrRemoveFriend from './addOrRemoveFriend';
import AcceptOrRefuseInvitation from '../buttonInvitation';

const ContentButton = ({
  id, isInvited, allInvitedIds, isFriend,
}) => {
  if (isFriend) {
    return <p>friend</p>;
  }
  return (
    <div>
      {!isInvited ?
        <AddOrRemoveFriend id={id} allInvitedIds={allInvitedIds} /> :
        <AcceptOrRefuseInvitation id={id} />
      }
    </div>
  );
};

ContentButton.propTypes = {
  id: PropTypes.string,
  allInvitedIds: PropTypes.object,
  isInvited: PropTypes.bool,
  isFriend: PropTypes.bool,
};

export default ContentButton;
