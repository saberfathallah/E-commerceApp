/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { withFormik } from 'formik';
import { compose, graphql } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import { get } from 'lodash';
import withUpdateProductMutation from '../../../graphql/product/updateProduct/withUpdateProductMutation';
import GET_PRODUCT_BY_ID from '../../../graphql/product/getProductById';
import validatorsFunctions, { validateObject } from '../../../utils/validator';
import ProductForm from './productForm';

function ProductFormEdition(props) {
  return <ProductForm {...props} productFormType="edition" />;
}

function createObjectForValidate() {
  const validate = Object.assign({}, {
    price: [validatorsFunctions.isRequire, validatorsFunctions.hasNumber],
    quantity: [validatorsFunctions.isRequire, validatorsFunctions.hasNumber],
    name: [validatorsFunctions.isRequire],
    brand: [validatorsFunctions.isRequire],
    description: [validatorsFunctions.isRequire],
  });
  return validate;
}

const formikHoc = withFormik({
  mapPropsToValues: (props) => ({
    name: get(props, 'data.getProductById.product.name', ''),
    brand: get(props, 'data.getProductById.product.brand', ''),
    price: get(props, 'data.getProductById.product.price', ''),
    quantity: get(props, 'data.getProductById.product.quantity', ''),
    description: get(props, 'data.getProductById.product.description', ''),
    image: get(props, 'data.getProductById.product.image', ''),
    categoryId: get(props, 'data.getProductById.product.categoryId', ''),
  }), // initialisation values
  validate: (values) => { // validation form
    const firstErrors = validateObject(values, createObjectForValidate());
    return Object.assign({}, firstErrors);
  },
  handleSubmit: async (values, { props, setSubmitting }) => {
    const startDatePromotion = props.startDate._d.getTime();
    console.log('TCL: startDatePromotion', startDatePromotion);
    const endDatePromotion = props.endDate._d.getTime();
    console.log('TCL: endDatePromotion', endDatePromotion);
    await props.updateProductMutation({
      ...values,
      price: Number(values.price),
      quantity: Number(values.quantity),
      endDatePromotion,
      startDatePromotion,
    }, props.idProduct);
    setSubmitting(false);
    alert('la modification du prroduit à été effectué avec succés');
  },
  enableReinitialize: true,
});

export default
compose(
  graphql(GET_PRODUCT_BY_ID, {
    options: (props) => ({
      variables: {
        id: props.idProduct,
      },
    }),
  }),
  withUpdateProductMutation,
  formikHoc,
  withRouter,
)(ProductFormEdition);
