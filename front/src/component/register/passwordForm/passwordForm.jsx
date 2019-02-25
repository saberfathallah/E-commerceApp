import React from 'react';
import { Form, Label, Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import UserPasswordSecurityBlock from './userPasswordSecurity';

export default function UserPassword(props) {
  const {
    className,
    values,
    handleChange,
    errors,
    touched,
    handleBlur,
    setRefs,
  } = props;

  const isBadPassword = !!(touched.password && errors.password);

  return (
    <div className={className}>
      <Form.Field>
        <Input
          name="password"
          value={values.password}
          onChange={handleChange}
          type="password"
          placeholder="Mot de passe"
          maxLength="80"
          setRefs={setRefs}
          autoComplete="password"
          onBlur={handleBlur}
        />
        {
          isBadPassword &&
            <Label basic color="red" pointing >
              <p>{errors.password}</p>
            </Label>
        }
      </Form.Field>
      <UserPasswordSecurityBlock password={values.password} />
    </div>
  );
}

UserPassword.propTypes = {
  className: PropTypes.string,
  values: PropTypes.object,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  errors: PropTypes.object,
  touched: PropTypes.object,
  setRefs: PropTypes.func,
};

