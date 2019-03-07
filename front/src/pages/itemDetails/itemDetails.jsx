import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import { get } from 'lodash';

import ItemDetailsComponent from '../../component/itemDetailsComponent';
import ItemDetailsSlide from '../../component/itemDetailsSlide';
import GET_PRODUCT_BY_ID from '../../graphql/product/queries/getProductById';

const ItemDetails = ({ getProductById, loading }) => {
  const product = get(getProductById, 'product', {});

  if (loading) {
    return <p>loading</p>;
  }
  return (
    <div className="container" style={{ padding: '1rem 0' }}>
      <div className="card">
        <div className="row">
          <ItemDetailsSlide
            images={[
              'https://productimages.hepsiburada.net/s/18/135/9801259057202.jpg?v1',
              'https://productimages.hepsiburada.net/s/18/280-413/9801258663986.jpg?v1',
              'https://productimages.hepsiburada.net/s/18/280-413/9801258696754.jpg?v1',
              'https://productimages.hepsiburada.net/s/18/280-413/9801258729522.jpg?v1',
              'https://productimages.hepsiburada.net/s/18/280-413/9801258762290.jpg?v1',
            ]}
          />
          <ItemDetailsComponent product={product} />
        </div>
      </div>
    </div>
  );
};

ItemDetails.propTypes = {
  getProductById: PropTypes.object,
  loading: PropTypes.bool,
};

export default graphql(GET_PRODUCT_BY_ID, {
  options: (props) => ({
    variables: {
      id: props.match.params.id,
    },
  }),
  props: ({ data: { getProductById, loading } }) => ({ getProductById, loading }),
})(ItemDetails);
