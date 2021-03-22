import React from 'react';
import { Text } from 'components';
import PropTypes from 'prop-types';

function ValueText(props) {
  const { children, size, className } = props;

  return (
    <Text weight="med1" size={size} classText={className}>
      {children}
    </Text>
  );
}

ValueText.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.string,
};

export default ValueText;
