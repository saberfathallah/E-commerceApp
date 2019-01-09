import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import TableProducts from '../tables/tableProducts';
import TableCategories from '../tables/tableCategories';
import TableUsers from '../tables/tableUsers';

function Content({ history, user }) {
  if (history.location.pathname === '/users') {
    return <TableUsers user={user} />;
  }

  if (history.location.pathname === '/categories') {
    return <TableCategories user={user} />;
  }

  if (history.location.pathname === '/products') {
    return <TableProducts user={user} />;
  }
}
Content.propTypes = {
  history: PropTypes.object,
};

export default withRouter(Content);
