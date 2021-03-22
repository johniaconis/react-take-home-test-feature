import React from 'react';
import PropTypes from 'prop-types';
import { LabelMapping } from 'HOCS';

function TextMapComponent(props) {
  const { children, className } = props;

  return (
    <span className={className}>
      {children}
    </span>
  );
}

TextMapComponent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.object]),
};

const TextMap = LabelMapping(TextMapComponent, 'children');

export default TextMap;
