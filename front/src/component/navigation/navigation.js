/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { compose } from 'react-apollo';
import WrapperNavigation from './withNavigationWrapper';
import { removeCookie } from '../../utils/cookiesStore';

const Navigation = ({
  className, user, history, cart,
}) =>
  (
    <div className={className}>
      <ul className="menu">
        <li><a href="/">Home</a></li>
        <li><Link to="/FavoriteList">Favorites</Link></li>
        <li><a href="/">Panier</a></li>
        <li><a href="/">Commandes</a></li>
      </ul>
      <div className="right-side">
        {user.firstName ?
          <div>
            <span className="navigation-user-name">Total panier: {cart.total} $</span>
            <span className="navigation-user-name">{user.firstName} {user.lastName}</span>
            <button
              onClick={() => {
                removeCookie('token', { path: '/' });
                removeCookie('token', { path: '/home' });
                localStorage.removeItem('token');
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
            <button onClick={() => history.push('/Login')} >Login</button>
          </div>}
      </div>
    </div>
  );

Navigation.propTypes = {
  className: PropTypes.string,
  history: PropTypes.object,
  user: PropTypes.object,
  cart: PropTypes.object,
};

export default compose(WrapperNavigation, withRouter)(Navigation);
