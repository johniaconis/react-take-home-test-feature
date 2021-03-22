import React from 'react';
import PropTypes from 'prop-types';
import { omit } from 'lodash';
import { Input as AntInput } from 'antd';
import { FormComponent } from 'HOCS';
import styles from './Input.module.scss';

function Input(props) {
  const { error, success } = props;
  const getStyle = () => {
    let style = styles.input;
    if (error) {
      style += ` ${styles.inputError}`;
    }

    if (success) {
      style += ` ${styles.inputSuccess}`;
    }

    return style;
  };

  /* eslint no-param-reassign: 0 */
  const enterResponse = (evt) => {
    if (evt.key === 'Enter') {
      if (props.onEnter) {
        props.onEnter(evt.target.value);
        evt.target.value = '';
      }
    }
  };

  const handleChange = (evt) => {
    props.onChange(evt.target.value);
  };

  const renderErrorMessage = () => {
    if (!error) {
      return null;
    }

    return (
      <div className={styles.errorMessage}>
        {error}
      </div>
    );
  };

  const style = getStyle();
  const inputProps = omit(props, ['onEnter', 'error']);
  return (
    <div className={style}>
      <AntInput
        type={'text'}
        {...inputProps}
        onChange={handleChange}
        onPressEnter={enterResponse}
      />
      {renderErrorMessage()}
    </div>
  );
}

Input.propTypes = {
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  success: PropTypes.bool,
  onChange: PropTypes.func,
  // onEnter: PropTypes.func,
};

// Until we refactor the input comp error styles back to the FormComp HOC
function BaseInput(props) {
  const inputProps = omit(props, ['formLayout']);
  return <AntInput type={'text'} {...inputProps} />;
}

function BasicInput(props) {
  return <AntInput type={'text'} {...props} />;
}

const mapInputToProps = (input) => ({
  ...input,
  onBlur: (proxy, event) => {
    proxy.persist();
    if (proxy.target.value !== '') {
      input.onBlur(proxy, event);
    }
  },
});

Input.form = FormComponent(BaseInput, mapInputToProps);
Input.BaseInput = BaseInput;
Input.BasicInput = BasicInput;

export default Input;
