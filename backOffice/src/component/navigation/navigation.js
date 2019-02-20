/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { compose } from 'react-apollo';
import WrapperNavigation from './withNavigationWrapper';
import { removeCookie } from '../../utils/cookiesStore';

const Navigation = ({
  className, user, history,
}) =>
  (
    <div className={className}>
      <ul className="menu">
        <li><Link to="/products">Produits</Link></li>
        <li><Link to="/categories">Categories</Link></li>
        {user.type === 'superAdmin' && <li><Link to="/users">Utilisateurs</Link></li>}

      </ul>
      <div className="right-side">
        <span className="navigation-user-name">{user.type} {user.firstName} {user.lastName}</span>
        <button
          onClick={() => {
            removeCookie('token', { path: '/' });
            removeCookie('token', { path: '/home' });
            localStorage.removeItem('token');
            history.push('/signin');
            window.location.reload();
          }}
          className="logout-btn"
        >
              déconnexion
        </button>
      </div>
    </div>
  );

Navigation.propTypes = {
  className: PropTypes.string,
  history: PropTypes.object,
  user: PropTypes.object,
};
export default compose(WrapperNavigation, withRouter)(Navigation);
