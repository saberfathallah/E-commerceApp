import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Step } from 'semantic-ui-react';
import isConnected from '../../utils/isConnected';
import ContentCart from './contentCart';

class Cart extends Component {
  state= {
    active: 'cartDetails',
    step: 1,
  }

  handleClick(active, step) { this.setState({ active, step }); }

  render() {
    const { user, cart } = this.props;
    const { active, step } = this.state;

    if (!isConnected()) {
      return <Redirect to="/" />;
    }

    return (
      <div style={{ width: '100%' }}>
        <Step.Group style={{ width: '100%' }} >
          <Step
            active={active === 'cartDetails'}
            completed={active !== 'cartDetails' && step > 1}
            icon="credit card"
            link
            onClick={() => this.handleClick('cartDetails', 1)}
            title="votre pannier"
            description="votre pannier"
            comp
          />
          <Step
            active={active === 'deliveryDetails'}
            completed={active !== 'deliveryDetails' && step > 2}
            icon="truck"
            link
            onClick={() => this.handleClick('deliveryDetails', 2)}
            title="les details de livraison"
            description="les details de livraison et de pannier"
          />
          <Step
            active={active === 'validateCart'}
            completed={active !== 'validateCart' && step > 3}
            icon="credit card"
            link
            onClick={() => this.handleClick('validateCart', 3)}
            title="valider mon pannier"
            description="valider mon pannier"
          />
        </Step.Group>
        <ContentCart user={user} cart={cart} active={active} />
      </div>
    );
  }
}

Cart.propTypes = {
  user: PropTypes.object,
  cart: PropTypes.object,
};

export default Cart;
