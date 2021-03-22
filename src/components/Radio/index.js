import React from 'react';
import PropTypes from 'prop-types';
import { Radio as WrappedRadio } from 'antd';
// import styles from './Radio.module.scss';

function Radio(props) {
  const { className, checked, onChange, disabled } = props;

  return (
    <WrappedRadio
      className={className}
      checked={checked}
      disabled={disabled}
      onChange={onChange}
      {...props}
    />
  );
}

Radio.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Radio;
