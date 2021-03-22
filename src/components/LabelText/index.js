import React from 'react';
import PropTypes from 'prop-types';
import { Text, TextMap } from 'components';
// import styles from './LabelText.module.scss';

function LabelText(props) {
  const { children, size, globalMapping, className } = props;
  const labelSize = size || 'normal';

  const newChildren = globalMapping
    ? (<TextMap>
      {children}
    </TextMap>)
    : children;

  return (
    <Text size={labelSize} classText={className} color="labelColor">
      {newChildren}
    </Text>
  );
}

LabelText.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.node]),
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  globalMapping: PropTypes.object,
  className: PropTypes.string,
};

export default LabelText;
