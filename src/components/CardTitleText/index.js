import React from 'react';
import { Text } from 'components';
import PropTypes from 'prop-types';

function CardTitleText(props) {
  const { children } = props;
  return (<Text size="med2" color="dark" weight="normal">
    {children}
  </Text>);
}

CardTitleText.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object,
    PropTypes.string]),
};

export default CardTitleText;
