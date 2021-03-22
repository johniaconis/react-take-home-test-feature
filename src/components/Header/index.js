import React from 'react';
import styles from './Header.module.scss';
import { PageTitleText, LabelDivider } from 'components';
import PropTypes from 'prop-types';

function Header(props) {
  const { label, children } = props;

  const title = (<PageTitleText size="med2">{label}</PageTitleText>);
  return (
    <div>
      <div className={styles.topBreak} />
      <div className={styles.header}>
        <LabelDivider label={title} dividerDistance="small" />
        {children}
      </div>
    </div>
  );
}

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  label: PropTypes.string,
};

export default Header;
