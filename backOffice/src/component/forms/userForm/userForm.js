/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Container, Button, Input } from 'semantic-ui-react';
import ErrorMessage from '../../../utils/errorMessage';
import withFormWrapper from '../withFormWrapper';

UserForm.propTypes = {
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

function UserForm(props) {
  const isBadFirstName = !!(props.touched.firstName && props.errors.firstName);
  const isBadLastName = !!(props.touched.lastName && props.errors.lastName);
  const isBadAge = !!(props.touched.age && props.errors.age);
  const isBadAdress = !!(props.touched.adress && props.errors.adress);
  const isBadMail = !!(props.touched.mail && props.errors.mail);
  const isBadPassword = !!(props.touched.password && props.errors.password);

  return (
    <div className={props.className}>
      <h1>formulaire utilisateur</h1>
      <Form onSubmit={props.handleSubmit} className="form">
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
          <Button primary type="submit">add user</Button>
        </Container>
      </Form>
    </div>
  );
}

export default withFormWrapper(UserForm);
