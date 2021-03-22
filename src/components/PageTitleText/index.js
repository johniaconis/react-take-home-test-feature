import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'components';
// import styles from './PageTitleText.module.scss';

function PageTitleText(props) {
  const { children } = props;
  return (
    <Text size="large2" weight="med2">
      {children}
    </Text>
  );
}

PageTitleText.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

export default PageTitleText;
