import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import ProductFormEdition from './productFormEdition';

class ContainerProductFormEdition extends React.Component {
  state ={
    startDate: moment(),
    endDate: moment(),
  };

  handleChangeStartDate = (date) => {
    this.setState({ startDate: date });
  }
  handleChangeEndDate = (date) => {
    this.setState({ endDate: date });
  }

  render() {
    const { match } = this.props;
    return (
      <ProductFormEdition
        startDate={this.state.startDate}
        endDate={this.state.endDate}
        handleChangeStartDate={this.handleChangeStartDate}
        handleChangeEndDate={this.handleChangeEndDate}
        idProduct={match.params.id}
      />);
  }
}

ContainerProductFormEdition.propTypes = {
  match: PropTypes.object,
};

export default ContainerProductFormEdition;
