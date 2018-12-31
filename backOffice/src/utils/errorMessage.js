import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
`;

LoginErrorMessage.propTypes = {
  error: PropTypes.string,
};

function LoginErrorMessage(props) {
  if (!props.error) {
    return null;
  }

  return (
    <ErrorMessage>
      {props.error}
    </ErrorMessage>
  );
}

export default LoginErrorMessage;
