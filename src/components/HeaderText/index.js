import React  from 'react';
import PropTypes from 'prop-types';
// import styles from './HeaderText.module.scss';
import { Text } from 'components';

function HeaderText(props) {
  const { children, size } = props;
  let headerSize = 'med2';
  let color;
  switch (size) {
    case 1:
      headerSize = 'large1';
      break;
    case 2:
      headerSize = 'med2';
      break;
    case 3:
      headerSize = 'med1';
      color = 'lighter';
      break;
    default:
      headerSize = 'med2';
  }
  return (
    <Text size={headerSize} color={color} weight="normal">
      {children}
    </Text>
  );
}

HeaderText.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  size: PropTypes.number,
};

export default HeaderText;
