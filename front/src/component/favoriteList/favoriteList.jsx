import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import { get } from 'lodash';
import FAVORITE_LIST from '../../graphql/favorite/getFavoriteListQuery';
import AllItems from '../items';

function FavoriteList({
  favortieList, user, loading,
}) {
  const numberOfproducts = get(favortieList, 'length', 0);
  return (
    <AllItems
      products={favortieList}
      user={user}
      numberOfproducts={numberOfproducts}
      loading={loading}
    />
  );
}

FavoriteList.propTypes = {
  user: PropTypes.object,
  favortieList: PropTypes.array,
  loading: PropTypes.bool,
};

export default graphql(FAVORITE_LIST, {
  skip: ({ user }) => !get(user, 'firstName', false),
  props: ({ data, loading }) => {
    const favortieList = get(data, 'getFavoriteList.favorites', []);

    return ({
      favortieList,
      loading,
    });
  },
})(FavoriteList);
