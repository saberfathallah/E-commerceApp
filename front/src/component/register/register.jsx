import React from 'react';
import { withFormik } from 'formik';
import PropTypes from 'prop-types';
import { compose } from 'react-apollo';
import { Form, Container, Button, Input } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

import ErrorMessage from '../../utils/errorMessage';
import validatorsFunctions, { validateObject } from '../../utils/validator';
import withRegistreUserMutation from '../../graphql/register/withRegistreUserMutation';
import withRegisterUserWrapper from './registerWrapper';

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
    await props.registreUser({
      ...values,
      age: Number(values.age),
      type: 'client',
    });
    props.history.push('/login');
    setSubmitting(false);
  },
  enableReinitialize: true,
});

Register.propTypes = {
  values: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    age: PropTypes.number,
    adress: PropTypes.string,
    mail: PropTypes.string,
    password: PropTypes.string,
  }),
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  handleSubmit: PropTypes.func,
  errors: PropTypes.object,
  touched: PropTypes.object,
  className: PropTypes.string,
};

function Register(props) {
  const isBadFirstName = !!(props.touched.firstName && props.errors.firstName);
  const isBadLastName = !!(props.touched.lastName && props.errors.lastName);
  const isBadAge = !!(props.touched.age && props.errors.age);
  const isBadAdress = !!(props.touched.adress && props.errors.adress);
  const isBadMail = !!(props.touched.mail && props.errors.mail);
  const isBadPassword = !!(props.touched.password && props.errors.password);

  return (
    <div className={props.className}>
      <h1>formulaire utilisateur</h1>
      <Form onSubmit={props.handleSubmit} className="user-from">
        <Form.Field>
          <Input
            placeholder="*firstName"
            maxLength="80"
            value={props.values.firstName}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            type="firstName"
            name="firstName"
            error={isBadFirstName}
          />
          {isBadFirstName && <ErrorMessage error={props.errors.firstName} />}
        </Form.Field>
        <Form.Field>
          <Input
            placeholder="*lastName"
            maxLength="80"
            value={props.values.lastName}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            type="lastName"
            name="lastName"
            error={isBadLastName}
          />
          {isBadLastName && <ErrorMessage error={props.errors.lastName} />}
        </Form.Field>
        <Form.Field>
          <Input
            placeholder="*age"
            maxLength="80"
            value={props.values.age}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            type="age"
            name="age"
            error={isBadAge}
          />
          {isBadAge && <ErrorMessage error={props.errors.age} />}
        </Form.Field>
        <Form.Field>
          <Input
            placeholder="*adress"
            maxLength="80"
            value={props.values.adress}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            type="adress"
            name="adress"
            error={isBadAdress}
          />
          {isBadAdress && <ErrorMessage error={props.errors.adress} />}
        </Form.Field>
        <Form.Field>
          <Input
            placeholder="*mail"
            maxLength="80"
            value={props.values.mail}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            type="mail"
            name="mail"
            error={isBadMail}
          />
          {isBadMail && <ErrorMessage error={props.errors.mail} />}
        </Form.Field>
        <Form.Field>
          <Input
            placeholder="*password"
            maxLength="80"
            value={props.values.password}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            name="password"
            error={isBadPassword}
          />
          {isBadPassword && <ErrorMessage error={props.errors.password} />}
        </Form.Field>
        <Container className="submit-container">
          <Button primary type="submit">inscription</Button>
        </Container>
      </Form>
    </div>
  );
}

export default
compose(withRegisterUserWrapper, withRouter, withRegistreUserMutation, formikHoc)(Register);
