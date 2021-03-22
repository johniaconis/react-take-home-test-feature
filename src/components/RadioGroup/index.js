import React from 'react';
import { Radio } from 'antd';
import { FormComponent } from 'HOCS';

const RadioGroup = (props) => (<Radio.Group {...props} />);
const mapInputToProps = (input) => ({
  onChange: (e) => { input.onChange(e); input.onBlur(e); },
  value: input.value,
});

export default RadioGroup;
RadioGroup.form = FormComponent(RadioGroup, mapInputToProps);
