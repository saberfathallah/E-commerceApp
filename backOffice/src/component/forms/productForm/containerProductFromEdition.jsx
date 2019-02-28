import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import ProductFormEdition from './productFormEdition';

class ContainerProductFormEdition extends React.Component {
  state ={
    startDate: moment(),
    endDate: moment(),
    isPromo: false,
  };

  handleChangeStartDate = (date) => {
    this.setState({ startDate: date });
  }
  handleChangeEndDate = (date) => {
    this.setState({ endDate: date });
  }

  addPromotion = () => {
    this.setState({ isPromo: !this.state.isPromp });
  }

  render() {
    const { match } = this.props;
    const { startDate, endDate, isPromo } = this.state;
    return (
      <ProductFormEdition
        startDate={startDate}
        endDate={endDate}
        handleChangeStartDate={this.handleChangeStartDate}
        handleChangeEndDate={this.handleChangeEndDate}
        idProduct={match.params.id}
        isPromo={isPromo}
        addPromotion={this.addPromotion}
      />);
  }
}

ContainerProductFormEdition.propTypes = {
  match: PropTypes.object,
};

export default ContainerProductFormEdition;
