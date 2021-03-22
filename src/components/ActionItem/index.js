import React from 'react';
import PropTypes from 'prop-types';
import { Icon, TextMap } from 'components';
import { ActionDivider } from './ActionDivider';
import { Menu } from 'antd';

import styles from './ActionItem.module.scss';

const Item = Menu.Item;

function ActionItem(props) {
  const { action, icon, useGlobalMapper, children, iconClass, id, ...rest } = props;
  const text = useGlobalMapper
  ? <TextMap>{children}</TextMap>
  : children;

  return (
    <Item
      {...rest}
      className={styles.menuItem}
    >
      <a onClick={action} id={id}>
        <Icon iconType={icon} classIcon={`${styles.leftIcon} ${iconClass}`} />&nbsp;
        {text}
      </a>
    </Item>
  );
}

ActionItem.propTypes = {
  id: PropTypes.string,
  action: PropTypes.func,
  icon: PropTypes.string,
  useGlobalMapper: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  iconClass: PropTypes.string,
};

ActionItem.ActionDivider = ActionDivider;

export default ActionItem;
