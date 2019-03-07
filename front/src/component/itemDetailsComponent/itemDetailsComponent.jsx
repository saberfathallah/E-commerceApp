import React from 'react';
import PropTypes from 'prop-types';

const ItemDetailsComponent = ({ product }) => (
  <aside className="col-sm-7">
    <article className="card-body p-5">
      <h3 className="title mb-3">{product.name}</h3>
      <p className="price-detail-wrap">
        <span className="price h3 text-warning">
          <span className="currency">$</span><span className="num">{product.price}</span>
        </span>
      </p>
      <dl className="item-property">
        <dt>Description</dt>
        <dd><p className="text-capitalize">{product.description}</p></dd>
      </dl>
      <dl className="param param-feature">
        <dt>Brand</dt>
        <dd className="text-capitalize">brand</dd>
      </dl>
      <dl className="param param-feature">
        <dt>Size</dt>
        <dd>15</dd>
      </dl>
    </article>
  </aside>
);

ItemDetailsComponent.propTypes = {
  product: PropTypes.object,
};

export default ItemDetailsComponent;
