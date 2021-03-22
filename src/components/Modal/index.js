import React from 'react';
import PropTypes from 'prop-types';
import { Modal as AntModal } from 'antd';

function Modal(props) {
  const { children, className } = props;

  return (
    <AntModal {...props} wrapClassName={className}>
      {children}
    </AntModal>
  );
}

// Refer to AntD modal props
Modal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  className: PropTypes.string,
};

Modal.info = AntModal.info;

export default Modal;
