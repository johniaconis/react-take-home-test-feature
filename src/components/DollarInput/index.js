import React from 'react';
import PropTypes from 'prop-types';
import { NumberPicker } from 'react-widgets';
import { FormComponent } from 'HOCS';
import numberLocalizer from 'react-widgets/lib/localizers/simple-number';
import styles from './DollarInput.module.scss';

numberLocalizer();

function DollarInput(props) {
  return (
    <div className={props.disabled ? styles.container : undefined}>
      <NumberPicker min={0} {...props} format="-$#,###.00" precision={2} />
    </div>
  );
}

DollarInput.propTypes = {
  disabled: PropTypes.bool,
};

const mapInputToProps = (input) => ({
  onChange: (val) => input.onChange(isNaN(val) ? null : val),
  onBlur: () => {
    if (input.value !== '') {
      input.onBlur(input.value);
    }
  },
  value: parseFloat(input.value),
  onFocus: input.onFocus,
});

DollarInput.form = FormComponent(DollarInput, mapInputToProps);

export default DollarInput;
