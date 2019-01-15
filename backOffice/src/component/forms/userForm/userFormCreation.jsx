/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { withFormik } from 'formik';
import { compose } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import withAddUserMutation from '../../../graphql/user/addUser/withAddUserMutation';
import validatorsFunctions, { validateObject } from '../../../utils/validator';
import UserForm from './userForm';

function UserFormCreation(props) {
  return <UserForm {...props} userFormType="creation" />;
}

function createObjectForValidate() {
  const validate = Object.assign({}, {
    age: [validatorsFunctions.isRequire, validatorsFunctions.hasNumber],
    mail: [validatorsFunctions.isRequire, validatorsFunctions.validEmail],
    firstName: [validatorsFunctions.isRequire],
    lastName: [validatorsFunctions.isRequire],
    adress: [validatorsFunctions.isRequire],
    password: [validatorsFunctions.isRequire],
  });
  return validate;
}

const formikHoc = withFormik({
  mapPropsToValues: () =>
    ({
      firstName: '',
      lastName: '',
      age: null,
      adress: '',
      mail: '',
      password: '',
    }), // initialisation values
  validate: (values) => { // validation form
    const firstErrors = validateObject(values, createObjectForValidate());
    return Object.assign({}, firstErrors);
  },
  handleSubmit: async (values, { props, setSubmitting }) => {
    await props.addUserMutation({
      ...values,
      age: Number(values.age),
      type: 'admin',
    });
    setSubmitting(false);
    alert("la création d'utilisateur à été effectué avec succés");
  },
  enableReinitialize: true,
});

export default
compose(
  withAddUserMutation,
  formikHoc,
  withRouter,
)(UserFormCreation);
