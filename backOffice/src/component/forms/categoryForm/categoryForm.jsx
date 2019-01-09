/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import { Form, Container, Button, Input } from 'semantic-ui-react';
import { get, map } from 'lodash';
import ErrorMessage from '../../../utils/errorMessage';
import ALL_CATEGORIES from '../../../graphql/category/getAllCategories';
import withFormWrapper from '../withFormWrapper';

CategoryForm.propTypes = {
  values: PropTypes.shape({
    name: PropTypes.string,
    level: PropTypes.string,
    parentId: PropTypes.string,
  }),
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  handleSubmit: PropTypes.func,
  errors: PropTypes.object,
  touched: PropTypes.object,
  className: PropTypes.string,
};

function CategoryForm(props) {
  const categories = get(props, 'data.getAllCategories.categories', []);
  const isBadName = !!(props.touched.name && props.errors.name);
  const isBadLevel = !!(props.touched.level && props.errors.level);
  const formType = get(props, 'categoryFormType', '');

  return (
    <div className={props.className}>
      <h1>formulaire categorie</h1>
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
            placeholder="*level"
            maxLength="80"
            value={props.values.level}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            type="level"
            name="level"
            error={isBadLevel}
          />
          {isBadLevel && <ErrorMessage error={props.errors.level} />}
        </Form.Field>
        {props.values.level > 1 &&
        <Form.Field className="contact-form__left-field">
          <select
            name="parentId"
            placeholder="parentId"
            value={props.values.parentId}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
          >
            <option value="">categories</option>
            {map(categories, (cat, index) => (
              // eslint-disable-next-line no-underscore-dangle
              <option value={cat._id} key={index}>{cat.name}</option>))}
          </select>
        </Form.Field>
        }
        <Container className="submit-container">
          <Button primary type="submit">{formType === 'edition' ? 'Edit category' : 'add category '}</Button>
        </Container>
      </Form>
    </div>
  );
}

export default compose(graphql(ALL_CATEGORIES), withFormWrapper)(CategoryForm);
