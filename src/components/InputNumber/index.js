import React from 'react';
import PropTypes from 'prop-types';
import { InputNumber as AntInputNumber } from 'antd';

function InputNumber(props) {
  const { children, className } = props;

  return (
    <AntInputNumber {...props} className={className}>
      {children}
    </AntInputNumber>
  );
}

// Refer to AntD modal props
InputNumber.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  className: PropTypes.string,
};

export default InputNumber;
