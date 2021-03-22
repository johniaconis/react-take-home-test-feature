import React from 'react';
import PropTypes from 'prop-types';
import styles from './SixSenseLogo.module.scss';
import lightLogo from 'images/6siLogoLight.png';
import darkLogo from 'images/6siLogoDark.png';

export function SixSenseLogo(props) {
  const { className, light } = props;
  return (
    <img
      alt={''}
      className={className ? `${className} ${styles.logo}` : styles.logo}
      src={light ? lightLogo : darkLogo}
    />
  );
}

SixSenseLogo.propTypes = {
  className: PropTypes.string,
  light: PropTypes.bool,
};

export default SixSenseLogo;
