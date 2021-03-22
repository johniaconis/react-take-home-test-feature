import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox as AntCheckbox } from 'antd';

// side note: For checkbox we're using the data-heap html attribute for heap analytics
function Checkbox(props) {
  const { id, className, checked, onChange, label, ...rest } = props;
  return (
    <AntCheckbox
      data-heap={id}
      className={className}
      checked={checked}
      onChange={onChange}
      {...rest}
    >
      {label}
    </AntCheckbox>
  );
}

Checkbox.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string,
};

export default Checkbox;
