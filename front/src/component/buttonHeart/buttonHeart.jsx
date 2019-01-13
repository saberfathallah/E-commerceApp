import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'react-apollo';
import { get } from 'lodash';
import { Button, Icon } from 'semantic-ui-react';
import withAddFavoriteMutation from '../../graphql/favorite/addFavorite/withAddFavoriteMutation';
import withDeleteFavoriteMutation from '../../graphql/favorite/deleteFavorite/withDeleteFavoriteMutation';

function AddOrRemoveFavorite({
  isFavorite, addFavoriteMutation,
  deleteFavoriteMutation,
  user,
  productId,
}) {
  const addorRemove = async () => {
    if (get(user, 'firstName', '')) {
      if (isFavorite) {
        await deleteFavoriteMutation(productId);
      } else await addFavoriteMutation(productId);
    } else alert('you need to connect');
  };

  return (
    <div>
      <Button style={{ float: 'right' }} as="div" labelPosition="right">
        <Button
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
  user: PropTypes.object,
  addFavoriteMutation: PropTypes.func,
  deleteFavoriteMutation: PropTypes.func,
  productId: PropTypes.string,
};

export default compose(withAddFavoriteMutation, withDeleteFavoriteMutation)(AddOrRemoveFavorite);
