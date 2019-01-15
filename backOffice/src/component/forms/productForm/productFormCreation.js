/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { withFormik } from 'formik';
import { compose } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import withAddProductMutation from '../../../graphql/product/addProduct/withAddProductMutation';
import validatorsFunctions, { validateObject } from '../../../utils/validator';
import ProductForm from './productForm';

function ProductFormCreation(props) {
  return <ProductForm {...props} productFormType="creation" />;
}

function createObjectForValidate() {
  const validate = Object.assign({}, {
    price: [validatorsFunctions.isRequire, validatorsFunctions.hasNumber],
    quantity: [validatorsFunctions.isRequire, validatorsFunctions.hasNumber],
    name: [validatorsFunctions.isRequire],
    brand: [validatorsFunctions.isRequire],
    description: [validatorsFunctions.isRequire],
    image: [validatorsFunctions.isRequire],
    categoryId: [validatorsFunctions.isRequire],
  });
  return validate;
}

const formikHoc = withFormik({
  mapPropsToValues: () =>
    ({
      name: '',
      brand: '',
      price: null,
      quantity: null,
      description: '',
      image: '',
      categoryId: '',
    }), // initialisation values
  validate: (values) => { // validation form
    const firstErrors = validateObject(values, createObjectForValidate());
    return Object.assign({}, firstErrors);
  },
  handleSubmit: async (values, { props, setSubmitting }) => {
    await props.addProductMutation({
      ...values,
      price: Number(values.price),
      quantity: Number(values.quantity),
    });
    setSubmitting(false);
    alert('la création du produit à été effectué avec succés');
  },
  enableReinitialize: true,
});

export default
compose(
  withAddProductMutation,
  formikHoc,
  withRouter,
)(ProductFormCreation);
