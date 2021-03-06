/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { withFormik } from 'formik';
import { compose, graphql } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import { get } from 'lodash';
import moment from 'moment';
import withUpdateProductMutation from '../../../graphql/product/updateProduct/withUpdateProductMutation';
import GET_PRODUCT_BY_ID from '../../../graphql/product/getProductById';
import validatorsFunctions, { validateObject } from '../../../utils/validator';
import ProductForm from './productForm';

export const percentagePromotion = [
  { label: '-10%', value: 10, typePromo: 'percentage' },
  { label: '-20%', value: 20, typePromo: 'percentage' },
  { label: '-30%', value: 30, typePromo: 'percentage' },
  { label: '-40%', value: 40, typePromo: 'percentage' },
  { label: '-50%', value: 50, typePromo: 'percentage' },
  { label: '-60%', value: 60, typePromo: 'percentage' },
  { label: '-70%', value: 70, typePromo: 'percentage' },
];


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
  mapPropsToValues: (props) => {
    const startDate = get(props, 'data.getProductById.product.promotions.startDatePromotion');
    const endDate = get(props, 'data.getProductById.product.promotions.endDatePromotion');
    const startDatePromotion = startDate ? moment(startDate) : moment();
    const endDatePromotion = startDate ? moment(endDate) : moment();

    return {
      name: get(props, 'data.getProductById.product.name', ''),
      brand: get(props, 'data.getProductById.product.brand', ''),
      price: get(props, 'data.getProductById.product.price', 0),
      quantity: get(props, 'data.getProductById.product.quantity', 0),
      description: get(props, 'data.getProductById.product.description', ''),
      image: get(props, 'data.getProductById.product.image', ''),
      categoryId: get(props, 'data.getProductById.product.categoryId', ''),
      isPromo: get(props, 'data.getProductById.product.isPromo', false),
      promotions: {
        startDatePromotion,
        endDatePromotion,
        value: get(props, 'data.getProductById.product.promotions.value', ''),
        label: get(props, 'data.getProductById.product.promotions.label', ''),
        typePromo: get(props, 'data.getProductById.product.promotions.startDate', 'percentage'),
      },
    };
  }, // initialisation values
  validate: (values) => { // validation form
    const firstErrors = validateObject(values, createObjectForValidate());
    return Object.assign({}, firstErrors);
  },
  handleSubmit: async (values, { props, setSubmitting }) => {
    const startDatePromotion = props.startDate._d.getTime();
    const endDatePromotion = props.endDate._d.getTime();
    const promotions = {
      startDatePromotion,
      endDatePromotion,
      label: values.promotions,
      value: Number((values.promotions).substr(1, 2)),
      typePromo: 'percentage',
    };
    await props.updateProductMutation({
      ...values,
      price: Number(values.price),
      quantity: Number(values.quantity),
      promotions,
      isPromo: props.isPromo,
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
