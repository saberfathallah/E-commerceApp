/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import { Form, Container, Button, Input } from 'semantic-ui-react';
import { get, map } from 'lodash';
import ErrorMessage from '../../../utils/errorMessage';
import ALL_CATEGORIES from '../../../graphql/category/getAllCategories';
import withFormWrapper from '../withFormWrapper';

ProductForm.propTypes = {
  values: PropTypes.shape({
    name: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
    description: PropTypes.string,
    image: PropTypes.string,
    categoryId: PropTypes.string,
  }),
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  handleSubmit: PropTypes.func,
  errors: PropTypes.object,
  touched: PropTypes.object,
  className: PropTypes.string,
};

function ProductForm(props) {
  const categories = get(props, 'data.getAllCategories.categories', []);
  const isBadName = !!(props.touched.name && props.errors.name);
  const isBadBrand = !!(props.touched.brand && props.errors.brand);
  const isBadPrice = !!(props.touched.price && props.errors.price);
  const isBadQuantity = !!(props.touched.quantity && props.errors.quantity);
  const isBadDescription = !!(props.touched.description && props.errors.description);
  const isBadImage = !!(props.touched.image && props.errors.image);
  const isBadCategoryId = !!(props.touched.categoryId && props.errors.categoryId);
  const formType = get(props, 'productFormType', '');

  return (
    <div className={props.className}>
      <h1>formulaire produit</h1>
      <Form onSubmit={props.handleSubmit} className="form">
        <Form.Field>
          <Input
            placeholder="*name"
            maxLength="80"
            value={props.values.name}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            type="name"
            name="name"
            error={isBadName}
          />
          {isBadName && <ErrorMessage error={props.errors.name} />}
        </Form.Field>
        <Form.Field>
          <Input
            placeholder="*brand"
            maxLength="80"
            value={props.values.brand}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            type="brand"
            name="brand"
            error={isBadBrand}
          />
          {isBadBrand && <ErrorMessage error={props.errors.brand} />}
        </Form.Field>
        <Form.Field>
          <Input
            placeholder="*price"
            maxLength="80"
            value={props.values.price}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            type="price"
            name="price"
            error={isBadPrice}
          />
          {isBadPrice && <ErrorMessage error={props.errors.price} />}
        </Form.Field>
        <Form.Field>
          <Input
            placeholder="*quantity"
            maxLength="80"
            value={props.values.quantity}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            type="quantity"
            name="quantity"
            error={isBadQuantity}
          />
          {isBadQuantity && <ErrorMessage error={props.errors.quantity} />}
        </Form.Field>
        <Form.Field>
          <Input
            placeholder="*description"
            maxLength="80"
            value={props.values.description}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            type="description"
            name="description"
            error={isBadDescription}
          />
          {isBadDescription && <ErrorMessage error={props.errors.description} />}
        </Form.Field>
        <Form.Field>
          <Input
            placeholder="*image"
            maxLength="80"
            value={props.values.image}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            name="image"
            error={isBadImage}
          />
          {isBadImage && <ErrorMessage error={props.errors.isBadImage} />}
        </Form.Field>
        <Form.Field className="contact-form__left-field">
          <select
            name="categoryId"
            placeholder="categoryId"
            value={props.values.categoryId}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
          >
            <option value="">categories</option>
            {map(categories, (cat, index) => (
              // eslint-disable-next-line no-underscore-dangle
              <option value={cat._id} key={index}>{cat.name}</option>))}
          </select>
          {isBadCategoryId && <ErrorMessage error={props.errors.categoryId} />}
        </Form.Field>
        <Container className="submit-container">
          <Button primary type="submit">{formType === 'edition' ? 'Edit product' : 'add product '}</Button>
        </Container>
      </Form>
    </div>
  );
}

export default compose(graphql(ALL_CATEGORIES), withFormWrapper)(ProductForm);
