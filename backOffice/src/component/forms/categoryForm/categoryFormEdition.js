/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { withFormik } from 'formik';
import { compose, graphql } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import { get } from 'lodash';
import withUpdateCategoryMutation from '../../../graphql/category/updateCategory/withUpdateCategoryMutation';
import GET_CATEGORY_BY_ID from '../../../graphql/category/getCategoryById';
import validatorsFunctions, { validateObject } from '../../../utils/validator';
import CategoryForm from './categoryForm';

function CategoryFormEdition(props) {
  return <CategoryForm {...props} categoryFormType="edition" />;
}

function createObjectForValidate() {
  const validate = Object.assign({}, {
    level: [validatorsFunctions.isRequire, validatorsFunctions.hasNumber],
    name: [validatorsFunctions.isRequire],
  });
  return validate;
}

const formikHoc = withFormik({
  mapPropsToValues: (props) => ({
    name: get(props, 'data.getCategoryById.category.name', ''),
    level: get(props, 'data.getCategoryById.category.level', ''),
  }),
  validate: (values) => {
    const firstErrors = validateObject(values, createObjectForValidate());
    return Object.assign({}, firstErrors);
  },
  handleSubmit: async (values, { props, setSubmitting }) => {
    await props.updateCategoryMutation({
      name: values.name,
      level: Number(values.level),
      parentId: values.parentId,
    }, props.match.params.id);
    setSubmitting(false);
  },
  enableReinitialize: true,
});

export default
compose(
  graphql(GET_CATEGORY_BY_ID, {
    options: (props) => ({
      variables: {
        id: props.match.params.id,
      },
    }),
  }),
  withUpdateCategoryMutation,
  formikHoc,
  withRouter,
)(CategoryFormEdition);
