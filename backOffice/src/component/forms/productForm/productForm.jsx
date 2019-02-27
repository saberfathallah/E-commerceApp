/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import { Form, Container, Button, Input } from 'semantic-ui-react';
import { get, map } from 'lodash';
import ErrorMessage from '../../../utils/errorMessage';
import ALL_CATEGORIES from '../../../graphql/category/getAllCategories';
import withFormWrapper from '../withFormWrapper';
import PickerDate from '../../datePicker';

class ProductForm extends Component {
  componentDidMount() {

  }
  render() {
    const categories = get(this.props, 'data.getAllCategories.categories', []);
    const isBadName = !!(this.props.touched.name && this.props.errors.name);
    const isBadBrand = !!(this.props.touched.brand && this.props.errors.brand);
    const isBadPrice = !!(this.props.touched.price && this.props.errors.price);
    const isBadQuantity = !!(this.props.touched.quantity && this.props.errors.quantity);
    const isBadDescription = !!(this.props.touched.description && this.props.errors.description);
    const isBadImage = !!(this.props.touched.image && this.props.errors.image);
    const isBadCategoryId = !!(this.props.touched.categoryId && this.props.errors.categoryId);
    const formType = get(this.props, 'productFormType', '');
    const {
      startDate,
      endDate,
      handleChangeStartDate,
      handleChangeEndDate,
      className,
      handleSubmit,
      values,
      handleChange,
      handleBlur,
      errors,
    } = this.props;

    return (
      <div className={className}>
        <h1>formulaire produit</h1>
        <Form onSubmit={handleSubmit} className="form">
          <Form.Field>
            <Input
              placeholder="*name"
              maxLength="80"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              type="name"
              name="name"
              error={isBadName}
            />
            {isBadName && <ErrorMessage error={errors.name} />}
          </Form.Field>
          <Form.Field>
            <Input
              placeholder="*brand"
              maxLength="80"
              value={values.brand}
              onChange={handleChange}
              onBlur={handleBlur}
              type="brand"
              name="brand"
              error={isBadBrand}
            />
            {isBadBrand && <ErrorMessage error={errors.brand} />}
          </Form.Field>
          <Form.Field>
            <Input
              placeholder="*price"
              maxLength="80"
              value={values.price}
              onChange={handleChange}
              onBlur={handleBlur}
              type="price"
              name="price"
              error={isBadPrice}
            />
            {isBadPrice && <ErrorMessage error={errors.price} />}
          </Form.Field>
          <Form.Field>
            <Input
              placeholder="*quantity"
              maxLength="80"
              value={values.quantity}
              onChange={handleChange}
              onBlur={handleBlur}
              type="quantity"
              name="quantity"
              error={isBadQuantity}
            />
            {isBadQuantity && <ErrorMessage error={errors.quantity} />}
          </Form.Field>
          <Form.Field>
            <Input
              placeholder="*description"
              maxLength="80"
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              type="description"
              name="description"
              error={isBadDescription}
            />
            {isBadDescription && <ErrorMessage error={errors.description} />}
          </Form.Field>
          <Form.Field>
            <Input
              placeholder="*image"
              maxLength="80"
              value={values.image}
              onChange={handleChange}
              onBlur={handleBlur}
              name="image"
              error={isBadImage}
            />
            {isBadImage && <ErrorMessage error={errors.isBadImage} />}
          </Form.Field>
          <Form.Field className="contact-form__left-field">
            <select
              name="categoryId"
              placeholder="categoryId"
              value={values.categoryId}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="">categories</option>
              {map(categories, (cat, index) => (
              // eslint-disable-next-line no-underscore-dangle
                <option value={cat._id} key={index}>{cat.name}</option>))}
            </select>
            {isBadCategoryId && <ErrorMessage error={errors.categoryId} />}
          </Form.Field>
          {formType === 'edition' &&
          <div>
            <p>Promotions</p>
            <div style={{ display: 'flex', textAlign: 'center' }}>
              <PickerDate
                begin
                startDate={startDate}
                handleChangeStartDate={handleChangeStartDate}
              />
              <PickerDate
                end
                endDate={endDate}
                handleChangeEndDate={handleChangeEndDate}
              />
            </div>
          </div>
          }
          <Container className="submit-container">
            <Button primary type="submit">{formType === 'edition' ? 'Edit product' : 'add product '}</Button>
          </Container>
        </Form>
      </div>
    );
  }
}

ProductForm.propTypes = {
  values: PropTypes.shape({
    name: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    categoryId: PropTypes.string,
  }),
  handleChange: PropTypes.func,
  handleChangeStartDate: PropTypes.func,
  handleChangeEndDate: PropTypes.func,
  startDate: PropTypes.object,
  endDate: PropTypes.object,
  handleBlur: PropTypes.func,
  handleSubmit: PropTypes.func,
  errors: PropTypes.object,
  touched: PropTypes.object,
  className: PropTypes.string,
};

export default compose(graphql(ALL_CATEGORIES), withFormWrapper)(ProductForm);
