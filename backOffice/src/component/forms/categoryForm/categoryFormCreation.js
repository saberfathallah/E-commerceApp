/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { withFormik } from 'formik';
import { compose } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import withAddCategoryMutation from '../../../graphql/category/addCategory/withAddCategoryMutation';
import validatorsFunctions, { validateObject } from '../../../utils/validator';
import CategoryForm from './categoryForm';

function CategoryFormCreation(props) {
  return <CategoryForm {...props} categoryFormType="creation" />;
}

function createObjectForValidate() {
  const validate = Object.assign({}, {
    level: [validatorsFunctions.isRequire, validatorsFunctions.hasNumber],
    name: [validatorsFunctions.isRequire],
    parentId: [validatorsFunctions.isRequire],
  });
  return validate;
}

const formikHoc = withFormik({
  mapPropsToValues: () =>
    ({
      name: '',
      level: '',
    }), // initialisation values
  validate: (values) => { // validation form
    const firstErrors = validateObject(values, createObjectForValidate());
    return Object.assign({}, firstErrors);
  },
  handleSubmit: async (values, { props, setSubmitting }) => {
    await props.addCategoryMutation({
      ...values,
      level: Number(values.level),
    });
    setSubmitting(false);
    alert('la création de categorie à été effectué avec succés');
  },
  enableReinitialize: true,
});

export default
compose(
  withAddCategoryMutation,
  formikHoc,
  withRouter,
)(CategoryFormCreation);
