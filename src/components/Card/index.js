import React from 'react';
import PropTypes from 'prop-types';
import { Card as AntCard } from 'antd';

function Card(props) {
  const { children, ...newProps } = props;

  return (
    <AntCard {...newProps}>
      {children}
    </AntCard>
  );
}

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  extra: PropTypes.element,
  bodyStyle: PropTypes.object,
  className: PropTypes.string,
};

export default Card;
