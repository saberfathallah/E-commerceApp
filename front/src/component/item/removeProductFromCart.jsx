import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'react-apollo';
import { Button, Icon } from 'semantic-ui-react';
import withRemoveProductFromCartMutation from '../../graphql/cart/removeProductFromCart/withRemoveProductFromCartMutation';

function RemoveProductFromCart({
  removeProductFromCart,
  productId,
}) {
  return (
    <div>
      <Button style={{ float: 'left' }} as="div" labelPosition="right">
        <Button
          color="red"
          onClick={() => removeProductFromCart(productId)}
        >
          <Icon name="delete" />
        supprimer
        </Button>
      </Button>
    </div>
  );
}
RemoveProductFromCart.propTypes = {
  removeProductFromCart: PropTypes.func,
  productId: PropTypes.string,
};

export default compose(withRemoveProductFromCartMutation)(RemoveProductFromCart);
