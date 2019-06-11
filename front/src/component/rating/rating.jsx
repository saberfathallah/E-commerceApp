import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'react-apollo';
import PropTypes from 'prop-types';
import Rating from 'react-rating';
import withModifyRatingProductMutation from '../../graphql/product/mutations/modifyRatingProduct/withModifyRatingProductMutation';

class RatingProduct extends React.Component {
  componentDidMount() {

  }
  render() {
    const {
      modifyRatingProductMutation, id, rate, addEventhandler, history,
    } = this.props;
    return (
      <Rating
        {...this.props}
        id={`event-${id}`}
        onClick={async (rat) => {
          if (localStorage.getItem('token')) {
            await modifyRatingProductMutation(id, rat);
          } else {
            addEventhandler('click', `#event-${id}`);
            history.push('/login');
          }
        }}
        placeholderRating={rate}
      />
    );
  }
}

RatingProduct.propTypes = {
  modifyRatingProductMutation: PropTypes.func,
  id: PropTypes.string,
  rate: PropTypes.number,
  addEventhandler: PropTypes.func,
  history: PropTypes.object,
};

export default compose(withRouter, withModifyRatingProductMutation)(RatingProduct);

