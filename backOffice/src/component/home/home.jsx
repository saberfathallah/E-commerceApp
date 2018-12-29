import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';
import usersQuery from '../../users';

function Home(props) {
  console.log('​Home -> props', props);
  return (
    <div>
      <p>Home</p>
      <button onClick={() => props.history.push('./profil')} >go to products</button>
    </div>
  );
}

Home.propTypes = {
  history: PropTypes.object,
};

export default compose(graphql(usersQuery), withRouter)(Home);
