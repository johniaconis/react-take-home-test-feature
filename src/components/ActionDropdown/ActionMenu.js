import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'antd';

import styles from './ActionDropdown.module.scss';

export function ActionMenu(props) {
  return (<Menu className={styles.menuContainer}>{props.children}</Menu>);
}

ActionMenu.propTypes = {
  children: PropTypes.array,
};
