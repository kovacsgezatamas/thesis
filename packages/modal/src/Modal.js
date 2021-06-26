import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import ModalPortal from './ModalPortal';

function Modal({ targetEl, ...restProps }) {
  return ReactDOM.createPortal(
    <ModalPortal {...restProps} />,
    targetEl
  );
}

Modal.propTypes = {
  /**
   * Close the modal when the Esc key is pressed
   */
  shouldCloseOnEsc: PropTypes.bool,
  /**
   * Close the modal when the backdrop (overlay) is clicked
   */
  shouldCloseOnBackdropClick: PropTypes.bool,
  /**
   * Fixed width of the modal container
   */
  staticWidth: PropTypes.string,
  /**
   * Fixed height of the modal container
   */
  staticHeight: PropTypes.string,
  /**
   * Container of the modal DOMElement.
   * Default to the <body> DOMElement
   */
  targetEl: PropTypes.object,
  /**
   * Close callback triggered by the eck keypress or backdrop click, if they are enabled
   */
  onClose: PropTypes.func,
};

Modal.defaultProps = {
  shouldCloseOnEsc: true,
  shouldCloseOnBackdropClick: true,
  staticWidth: undefined,
  staticHeight: undefined,
  targetEl: window.document.body,
  onClose: () => {},
};

export default Modal;
