/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { compose, graphql } from 'react-apollo';
import { get } from 'lodash';
import WrapperNavigation from './withNavigationWrapper';
import { removeCookie } from '../../utils/cookiesStore';
import ALL_INVITATIONS from '../../graphql/invitation/getAllInvitation';
import PopupInv from '../modals/popup';

function Navigation({
  className, user, history, cart, usersInvitations,
}) {
  const total = get(cart, 'currentCart.cart.totalWithPromotion', '');
  return (
    <div className={className}>
      <ul className="menu">
        <li><a href="/">Home</a></li>
        {user.firstName &&
          <div style={{ display: 'inline' }}>
            <li><Link to="/FavoriteList">Favorites</Link></li>
            <li><Link to="/cart">Panier</Link></li>
            <li><Link to="/orders">Commandes</Link></li>
            <li><Link to="/clients">clients</Link></li>
          </div>
        }
      </ul>
      <div className="right-side">
        {user.firstName ?
          <div>
            <span className="navigation-user-name">Total panier: {total} $</span>
            <span className="navigation-user-name">{user.firstName} {user.lastName}</span>
            <PopupInv usersInvitations={usersInvitations} />
            <button
              onClick={() => {
                removeCookie('token', { path: '/' });
                removeCookie('token', { path: '/home' });
                localStorage.removeItem('token');
                window.location.reload();
                history.push('/');
              }}
              className="logout-btn"
            >
              déconnexion
            </button>
          </div>
          :
          <div style={{ float: 'right' }}>
            <button onClick={() => history.push('/register')} >register</button>
            <button
              onClick={() => {
                history.push('/Login');
              }}
            >Login
            </button>
          </div>}
      </div>
    </div>
  );
}

Navigation.propTypes = {
  className: PropTypes.string,
  history: PropTypes.object,
  user: PropTypes.object,
  cart: PropTypes.object,
  usersInvitations: PropTypes.array,
};

export default compose(
  WrapperNavigation,
  withRouter,
  graphql(ALL_INVITATIONS, {
    skip: ({ user }) => !get(user, 'firstName', false),
    props: ({ data, loading }) => {
      const usersInvitations = get(data, 'getAllInvitation.users', []);

      return ({
        usersInvitations,
        loading,
      });
    },
  })
)(Navigation);
