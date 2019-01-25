import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'semantic-ui-react';

const Popup = ({ open, message, hidePopUpFunction }) => (
  <Modal open={open}>
    <Modal.Content>
      <p>{message}</p>
    </Modal.Content>
    <Modal.Actions>
      <Button onClick={() => hidePopUpFunction()} positive icon="checkmark" labelPosition="right" content="close" />
    </Modal.Actions>
  </Modal>
);

Popup.propTypes = {
  open: PropTypes.bool,
  message: PropTypes.string,
  hidePopUpFunction: PropTypes.func,
};

export default Popup;
