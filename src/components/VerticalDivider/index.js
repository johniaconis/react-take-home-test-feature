import React from 'react';
import PropTypes from 'prop-types';
import styles from './VerticalDivider.module.scss';

function VerticalDivider(props) {
  const { className } = props;
  return (
    <div className={`${styles.verticalDivider} ${className}`} />
  );
}

VerticalDivider.propTypes = {
  className: PropTypes.string,
};

export default VerticalDivider;
