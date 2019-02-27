import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'react-apollo';
import { Button } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import withHeaderContentWrapper from './headerContentWrapper';

function HeaderContent({
  history,
  length,
  type,
  className,
}) {
  return (
    <div className={className}>
      <p className="header_content-text">Total: {length}</p>
      <Button
        color="green"
        content={`add${type}`}
        icon="add"
        labelPosition="left"
        onClick={() => history.push(`add${type}`)}
        className="header_content-button"
      />
    </div>
  );
}

HeaderContent.propTypes = {
  history: PropTypes.object,
  className: PropTypes.string,
  length: PropTypes.number,
  type: PropTypes.string,
};

export default compose(withHeaderContentWrapper, withRouter)(HeaderContent);
