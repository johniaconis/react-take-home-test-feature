import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-flexbox-grid/lib';
import styles from './ValueLabel.module.scss';
import { Text, LabelText } from 'components';

function ValueLabel(props) {
  const { label, value, size, className, position,
      labelClassName, valueClassName } = props;

  if (position === 'right') {
    return (
      <div className={`${styles.rightPairDiv} ${className}`}>
        <span className={styles.rightSpacer}>
          <LabelText
            size={size}
            className={labelClassName}
          >
            {label}
          </LabelText>
        </span>
        <span>
          <Text
            size={size}
            classText={valueClassName}
            weight="med1"
          >
            {value}
          </Text>
        </span>
      </div>
    );
  }
  return (
    <div className={`${styles.topPairDiv} ${className}`}>
      <Row start="xs">
        <Text
          size={size}
          classText={valueClassName}
          weight="med1"
        >
          {value}
        </Text>
      </Row>
      <Row start="xs">
        <LabelText
          size={size}
          className={labelClassName}
        >
          {label}
        </LabelText>
      </Row>
    </div>
  );
}

ValueLabel.propTypes = {
  label: PropTypes.node,
  value: PropTypes.node,
  size: PropTypes.string,
  className: PropTypes.string,
  labelClassName: PropTypes.string,
  valueClassName: PropTypes.string,
  position: PropTypes.string,
};

ValueLabel.defaultProps = {
  size: 'normal',
  position: 'top',
};

export default ValueLabel;
