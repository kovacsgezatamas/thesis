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
  shouldCloseOnEsc: PropTypes.bool,
  shouldCloseOnBackdropClick: PropTypes.bool,
  staticWidth: PropTypes.string,
  staticHeight: PropTypes.string,
  targetEl: PropTypes.object,
  onClose: PropTypes.func,
}

Modal.defaultProps = {
  shouldCloseOnEsc: true,
  shouldCloseOnBackdropClick: true,
  staticWidth: undefined,
  staticHeight: undefined,
  targetEl: window.document.body,
  onClose: () => {},
}

export default Modal;
