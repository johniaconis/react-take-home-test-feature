import React from 'react';
import { Form as AntForm } from 'antd';
import { FormItem } from './FormItem';

function Form(props) {
  return <AntForm {...props} />;
}

Form.form = FormItem;

export default Form;
