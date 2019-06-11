import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { compose } from 'react-apollo';
import { Button, Icon } from 'semantic-ui-react';
import withAddFavoriteMutation from '../../graphql/favorite/addFavorite/withAddFavoriteMutation';
import withDeleteFavoriteMutation from '../../graphql/favorite/deleteFavorite/withDeleteFavoriteMutation';

function AddOrRemoveFavorite({
  isFavorite, addFavoriteMutation,
  deleteFavoriteMutation,
  productId,
  addEventhandler,
  history,
}) {
  const addorRemove = async () => {
    if (localStorage.getItem('token')) {
      if (isFavorite) {
        await deleteFavoriteMutation(productId);
      } else await addFavoriteMutation(productId);
    } else {
      addEventhandler('click', `#event-${productId}`);
      history.push('/login');
    }
  };

  return (
    <div>
      <Button style={{ float: 'right' }} as="div" labelPosition="right">
        <Button
          id={`event-${productId}`}
          color={isFavorite ? 'green' : 'red'}
          onClick={() => addorRemove()}
        >
          <Icon name="heart" />
        Like
        </Button>
      </Button>
    </div>
  );
}
AddOrRemoveFavorite.propTypes = {
  isFavorite: PropTypes.bool,
  addFavoriteMutation: PropTypes.func,
  deleteFavoriteMutation: PropTypes.func,
  productId: PropTypes.string,
  addEventhandler: PropTypes.func,
  history: PropTypes.object,
};

export default compose(
  withAddFavoriteMutation,
  withDeleteFavoriteMutation,
  withRouter,
)(AddOrRemoveFavorite);
