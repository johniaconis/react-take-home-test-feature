import React from 'react';
import PropTypes from 'prop-types';
import styles from './LinkedText.module.scss';
import { Link } from 'react-router';

const ATag = (props) => <a {...props}>{props.children}</a>;

ATag.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.node]),
};

function LinkedText(props) {
  const { link, children, className, onClick, isInternal, newWindow, title, id } = props;

  const DisplayComponent = isInternal ? Link : ATag;
  return (
    <DisplayComponent
      id={id}
      title={title}
      className={`${styles.color} ${className}`}
      href={link}
      to={link}
      onClick={onClick}
      target={newWindow ? '_blank' : ''}
    >
      {children}
    </DisplayComponent>
  );
}

LinkedText.propTypes = {
  link: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  isInternal: PropTypes.bool,
  newWindow: PropTypes.bool,
  title: PropTypes.string,
  id: PropTypes.string,
};

export default LinkedText;
