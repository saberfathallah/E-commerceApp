import React from 'react';
import { concat, includes } from 'lodash';
import { Progress, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function localValidationForPassword(password = '') {
  const hasCharacter = /[a-zA-Z]/.test(password) ? null : 'noCharacter';
  const hasSpecialCharacter = /[^a-zA-Z\d]/.test(password) ? null : 'noSpecialCharacter';
  const hasNumber = /.*[0-9].*/.test(password) ? null : 'noNumber';
  const hasMinLength = password.length > 7 ? null : 'noMinimumLength';
  return concat([], hasCharacter, hasSpecialCharacter, hasNumber, hasMinLength);
}

const UserPasswordSecurityBlock = ({
  className, password,
}) => {
  const errorsNames = localValidationForPassword(password).filter((v) => v !== null);
  return (
    <div className={className}>
      <div className="user-password__security-block">
        <div className="user-password__title">Sécurité</div>
        <Progress className="user-password__progress" color={errorsNames.length === 0 ? 'green' : 'yellow'} percent={100 - (errorsNames.length * 25)} size="tiny" />
        <div className="user-password__sub-title"> Votre mot de passe doit comporter :</div><br />
        <div className="user-password__block">
          <span className="user-password__condition">{!includes(errorsNames, 'noCharacter') ? <Icon color="green" name="checkmark" /> : <Icon color="red" name="remove" />}</span>1 lettre<br />
          <span className="user-password__condition">{!includes(errorsNames, 'noNumber') ? <Icon color="green" name="checkmark" /> : <Icon color="red" name="remove" />}</span>1 chiffre<br />
          <span className="user-password__condition">{!includes(errorsNames, 'noSpecialCharacter') ? <Icon color="green" name="checkmark" /> : <Icon color="red" name="remove" />}</span>1 caractère spécial (?!,&*-/+...)<br />
          <span className="user-password__condition">{!includes(errorsNames, 'noMinimumLength') ? <Icon color="green" name="checkmark" /> : <Icon color="red" name="remove" />}</span>8 caractères minimum<br />
        </div>
      </div>
    </div>
  );
};

UserPasswordSecurityBlock.propTypes = {
  className: PropTypes.string,
  password: PropTypes.string,
};

export default styled(UserPasswordSecurityBlock)`
 &&& {
    .user-password__security-block{ 
        background: #cecbcb;
        border: 0px;
        border-radius: 0px;
    }
    .user-password__title{
      font-weight: bold;
      padding-top: 10px;
      padding-left: 20px;
      font-size: 18px;
    }
    .user-password__condition{
      padding-bottom: 10px;
    }
    .user-password__sub-title{
      font-weight: bold;
      padding-left: 20px;
    }
    .user-password__block{
      padding-bottom: 10px;
    }
    .user-password__progress{
      margin-top: 20px;
      margin-bottom: 20px;
      margin-left: 20px;
      margin-right: 20px;
      text-align: center;
      background-color: white;
     }
 }
`;
