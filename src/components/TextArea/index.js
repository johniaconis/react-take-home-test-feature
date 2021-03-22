import React from 'react';
import PropTypes from 'prop-types';
import { omit } from 'lodash';
import { Input } from 'antd';
import { FormComponent } from 'HOCS';
import styles from './TextArea.module.scss';

const TextArea = (props) => {
  const { error, success, restrictResize, errorMessage, onChange } = props;

  const getStyle = () => {
    let style = styles.textarea;
    if (error) {
      style += ` ${styles.textareaError}`;
    }

    if (success) {
      style += ` ${styles.textareaSuccess}`;
    }

    if (restrictResize) {
      style += ` ${styles.restrictResize}`;
    }

    return style;
  };

  const handleChange = (evt) => {
    onChange(evt.target.value);
  };

  const renderErrorMessage = () => {
    if (!errorMessage) {
      return null;
    }

    return (
      <div className={styles.errorMessage}>
        {errorMessage}
      </div>
    );
  };

  const style = getStyle();
  const textAreaProps = omit(props, ['restrictResize', 'error', 'errorMessage']);

  return (
    <div className={style}>
      <Input type="textarea" {...textAreaProps} onChange={handleChange} />
      {renderErrorMessage()}
    </div>
  );
};

TextArea.propTypes = {
  error: PropTypes.string,
  success: PropTypes.bool,
  restrictResize: PropTypes.bool,
  onChange: PropTypes.func,
  errorMessage: PropTypes.string,
};

function BaseTextArea(props) {
  return (
    <Input {...props} type="textarea" />
  );
}

TextArea.form = FormComponent(BaseTextArea);
export default TextArea;
