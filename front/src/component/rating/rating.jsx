import React from 'react';
import PropTypes from 'prop-types';
import Rating from 'react-rating';
import withModifyRatingProductMutation from '../../graphql/product/mutations/modifyRatingProduct/withModifyRatingProductMutation';

class RatingProduct extends React.Component {
  componentDidMount() {

  }
  render() {
    const { modifyRatingProductMutation, id, rate } = this.props;
    return (
      <Rating
        {...this.props}
        onClick={(rat) => modifyRatingProductMutation(id, rat)}
        placeholderRating={rate}
      />
    );
  }
}

RatingProduct.propTypes = {
  modifyRatingProductMutation: PropTypes.func,
  id: PropTypes.string,
  rate: PropTypes.number,
};

export default withModifyRatingProductMutation(RatingProduct);

