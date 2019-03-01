/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import { get, map, includes } from 'lodash';
import { Header, Image, Table } from 'semantic-ui-react';
import ALL_CLIENTS from '../../graphql/user/getAllClients';
import withClientWrapper from './clientsWrapper';
import LIST_OF_CLIENTS_INVITED from '../../graphql/invitation/getListOfClientsInvited';
import ALL_INVITATIONS from '../../graphql/invitation/getAllInvitation';
import ALL_FRIENDS from '../../graphql/user/getListOfFriends';
import ContentButton from './contentButton';

function Clients({
  data, className, listOfClientInvited, invitations, listOfFriends,
}) {
  const allInvited = get(listOfClientInvited, 'getListOfClientsInvited.invitations', []);
  const allInvitedIds = map(allInvited, (item) => item.idInvited);
  const clients = get(data, 'getAllClients.users', []);
  const friends = get(listOfFriends, 'getListOfFriends.users', []);
  const friendsIds = map(friends, (friend) => friend._id);
  const allClients = map(clients, (client, index) => {
    const isInvited = includes(invitations, client._id);
    const isFriend = includes(friendsIds, client._id);
    return (
      <div key={index} className={className}>
        <Table basic="very" celled collapsing>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Header as="h4" image>
                  <Image src="https://react.semantic-ui.com/images/avatar/small/lena.png" rounded size="mini" />
                  <Header.Content>
                    {client.firstName}
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>
                <ContentButton
                  id={client._id}
                  allInvitedIds={allInvitedIds}
                  isInvited={isInvited}
                  isFriend={isFriend}
                />
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    );
  });
  return (
    <div>
      <p>{allClients}</p>
    </div>
  );
}

Clients.propTypes = {
  data: PropTypes.object,
  className: PropTypes.string,
  listOfClientInvited: PropTypes.object,
  invitations: PropTypes.array,
  listOfFriends: PropTypes.object,
};

export default compose(
  withClientWrapper,
  graphql(ALL_INVITATIONS, {
    props: ({ data }) => {
      const usersInvitations = get(data, 'getAllInvitation.users', []);
      const invitations = map(usersInvitations, (inv) => inv._id);
      return ({
        invitations,
      });
    },
  }),
  graphql(ALL_FRIENDS, { name: 'listOfFriends' }),
  graphql(ALL_CLIENTS),
  graphql(LIST_OF_CLIENTS_INVITED, { name: 'listOfClientInvited' })
)(Clients);
