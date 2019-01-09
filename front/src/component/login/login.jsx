/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { withFormik } from 'formik';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import { compose } from 'react-apollo';
import { Form, Container, Button, Input } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

import withLoginMutation from '../../graphql/login/withLoginMutation';
import ErrorMessage from '../../utils/errorMessage';
import validatorsFunctions, { validateObject } from '../../utils/validator';
import { setCookie, removeCookie } from '../../utils/cookiesStore';
import withLoginWrapper from './withLoginWrapper';

Login.propTypes = {
  values: PropTypes.shape({
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

function createObjectForValidate() {
  const validate = Object.assign({}, {
    mail: [validatorsFunctions.isRequire, validatorsFunctions.validEmail],
    password: [validatorsFunctions.isRequire],
  });
  return validate;
}

const formikHoc = withFormik({
  mapPropsToValues: () => ({ mail: '', password: '' }),
  validate: (values) => {
    const firstErrors = validateObject(values, createObjectForValidate());
    return Object.assign({}, firstErrors);
  },
  handleSubmit: async (values, { props, setSubmitting, setErrors }) => {
    const user = await props.login(values.mail, values.password);
    setSubmitting(false);
    if (get(user, 'data.loginUser.error')) {
      setErrors({
        general: 'Oups ! Le nom d\'utilisateur ou le mot de passe saisi n\'est pas valide',
      });
    } else {
      setCookie('token', get(user, 'data.loginUser.token'), { path: '/' });
      removeCookie('token', { path: '/home' });
      localStorage.setItem('token', get(user, 'data.loginUser.token'));
      props.history.push('/');
    }
  },
});

function Login(props) {
  const isBadMail = !!(props.touched.mail && props.errors.mail);
  const isBadPassword = !!(props.touched.password && props.errors.password);
  return (
    <div className={props.className}>
      <h1>connexion utilisateur</h1>
      <Form onSubmit={props.handleSubmit} className="form">
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
            placeholder="*Mot de Passe"
            maxLength="80"
            value={props.values.password}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            type="password"
            name="password"
            error={isBadPassword}
          />
          {isBadPassword && <ErrorMessage error={props.errors.password} />}
        </Form.Field>
        <Container className="submit-container">
          <Button primary type="submit">CONNEXION</Button>
        </Container>
      </Form>
    </div>
  );
}

export default compose(withLoginWrapper, withLoginMutation, formikHoc, withRouter)(Login);
