import React from 'react';
import { FormComponent } from 'HOCS';
import { InputNumber } from 'antd';

export function NumberInput(props) {
  return (<InputNumber {...props} />);
}

NumberInput.form = FormComponent(NumberInput);

export default NumberInput;
