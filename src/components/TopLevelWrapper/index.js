import React from 'react';
import PropTypes from 'prop-types';
import styles from './TopLevelWrapper.module.scss';

function TopLevelWrapper(props) {
  return (
    <div className={styles.topLevelWrapper}>
      {props.children}
    </div>
  );
}

TopLevelWrapper.propTypes = {
  children: PropTypes.object.isRequired,
};

export default TopLevelWrapper;
