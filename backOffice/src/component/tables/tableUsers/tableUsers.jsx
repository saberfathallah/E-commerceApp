/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import { map, get } from 'lodash';
import { Button, Icon } from 'semantic-ui-react';
import ALL_USERS from '../../../graphql/user/getAllUsers';
import withRemoveUserMutation from '../../../graphql/user/removeUser/withRemoveUserMutation';
import HeaderContent from '../../headerContent';
import withTabelWrapper from '../withTabelWrapper';

function TableUsers({
  data,
  user,
  removeUserMutation,
  className,
}) {
  const users = get(data, 'getAllUsers.users', []);
  const loading = get(data, 'loading', true);

  if (loading) return <Icon name="circle notched" loading />;
  return (
    <div className={className}>
      <HeaderContent length={users.length} type="User" />
      <section>
        <h1>Table utilisateurs</h1>
        <div className="tbl-header">
          <table cellPadding="0" cellSpacing="0">
            <thead>
              <tr>
                <th>FIRSTNAME</th>
                <th>LASTNAME</th>
                <th>AGE</th>
                <th>EMAIL</th>
                <th>ADRESSE</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="tbl-content">
          <table cellPadding="0" cellSpacing="0">
            <tbody>
              {map(users, (us, index) => (
                <tr key={index}>
                  <td>{us.firstName}</td>
                  <td>{us.lastName}</td>
                  <td>{us.age}</td>
                  <td>{us.mail}</td>
                  <td>{us.adress}</td>
                  <td style={{ display: 'flex' }}>
                    <Button
                      disabled={user.type === 'admin'}
                      color="red"
                      content="Remove"
                      icon="remove"
                      labelPosition="left"
                      onClick={() => removeUserMutation(us._id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
TableUsers.propTypes = {
  data: PropTypes.object,
  user: PropTypes.object,
  className: PropTypes.string,
  removeUserMutation: PropTypes.func,
};

export default compose(withRemoveUserMutation, graphql(ALL_USERS), withTabelWrapper)(TableUsers);
