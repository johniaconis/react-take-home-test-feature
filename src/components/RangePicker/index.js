import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from 'antd';
import { FormComponent } from 'HOCS';
import styles from './RangePicker.module.scss';
import moment from 'moment';

function RangePicker(props) {
  return (
    <div className={`${styles.rangePicker} ${props.className}`}>
      <DatePicker.RangePicker {...props} />
    </div>
  );
}

const mapInputToProps = (input) => {
  let props = {
    onChange: (date, dateString) => {
      input.onChange(dateString);
      input.onBlur(dateString);
    },
  };
  if (input.value) {
    props = {
      ...props,
      value: input.value.map((dt) => (dt === '' ? '' : moment(dt))),
    };
  }
  return props;
};

RangePicker.propTypes = {
  className: PropTypes.string,
};

RangePicker.form = FormComponent(RangePicker, mapInputToProps);

export default RangePicker;
