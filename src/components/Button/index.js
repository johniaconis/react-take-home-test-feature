import React from 'react';
import PropTypes from 'prop-types';
import { Text, Icon } from 'components';
import { Button as AntButton } from 'antd';
import styles from './Button.module.scss';

const Button = (props) => {
  const {
    loading,
    btnLabelText,
    loadingText,
    children,
    iconType,
    iconSize,
    iconColor,
    ...rest
  } = props;

  const renderContent = () => {
    if (iconType) {
      return (
        <div className={styles.content}>
          <Icon iconType={iconType} size={iconSize} color={iconColor} classIcon={styles.icon} />
          {children}
        </div>
      );
    }

    if (btnLabelText) {
      return (
        <div className={styles.textContent}>
          <Text size="med2">
            {loading ? loadingText : btnLabelText}
          </Text>
        </div>
      );
    }
    return children;
  };

  return (
    <AntButton loading={loading} {...rest}>
      {renderContent()}
    </AntButton>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.node]),
  iconType: PropTypes.string,
  iconSize: PropTypes.string,
  iconColor: PropTypes.string,
  loading: PropTypes.bool,
  btnLabelText: PropTypes.string,
  loadingText: PropTypes.string,
};

Button.defaultProps = {
  iconSize: 'default',
  iconColor: 'default',
};

export default Button;
