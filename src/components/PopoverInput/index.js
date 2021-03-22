import React from 'react';
import PropTypes from 'prop-types';
import { Popover } from 'antd';
import { omit } from 'lodash';
import { FormComponent } from 'HOCS';
import { Input } from 'components';

const BasicInput = Input.BasicInput;

const PopoverInputComponent = (props) => {
  const { content, title } = props;
  const inputProps = omit(props, ['title', 'content']);
  return (
    <Popover content={content} title={title} trigger="hover" placement="right">
      <BasicInput {...inputProps} />
    </Popover>
  );
};

PopoverInputComponent.propTypes = {
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.object]),
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.object]),
};

export default FormComponent(PopoverInputComponent);
