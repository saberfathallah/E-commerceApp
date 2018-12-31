import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';
import { removeCookie } from '../../utils/cookiesStore';
import ALL_USER_QUERY from '../../graphql/user/getAllUserQuery';

function Home(props) {
  return (
    <div>
      <p>Home</p>
      <button
        onClick={() => {
          removeCookie('token', { path: '/' });
          props.history.push('/');
        }}
      >déconnexion
      </button>
    </div>
  );
}

Home.propTypes = {
  history: PropTypes.object,
};

export default compose(graphql(ALL_USER_QUERY), withRouter)(Home);

