/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';
import { Image, Table } from 'semantic-ui-react';
import Popup from 'reactjs-popup';
import AcceptOrRefuseInvitation from '../buttonInvitation';

const PopupInv = ({ usersInvitations }) => {
  const allClients = map(usersInvitations, (user, index) =>
    (
      <div key={index} style={{ lineHeight: '100%' }}>
        <Table basic="very" celled collapsing>
          <Table.Body>
            <Table.Row>
              <Table.Cell style={{ width: '50%', textAlign: 'center' }}>
                <Image
                  src="https://react.semantic-ui.com/images/avatar/small/lena.png"
                  rounded
                  style={{ height: '38%', marginBottom: '2px' }}
                />
                {user.firstName}
              </Table.Cell>
              <Table.Cell style={{ textAlign: 'center' }}>
                <AcceptOrRefuseInvitation id={user._id} />
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    ));
  return (
    <Popup trigger={<button style={{ color: 'red' }}>{usersInvitations.length}</button>} position="bottom center">
      {allClients.length === 0 ? <p>empty invitations</p> : <div>{allClients}</div>}
    </Popup>
  );
};

PopupInv.propTypes = {
  usersInvitations: PropTypes.array,
};

export default PopupInv;
