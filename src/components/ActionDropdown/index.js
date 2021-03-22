import React from 'react';
import PropTypes from 'prop-types';
import { ActionMenu } from './ActionMenu';
import { Button, Icon } from 'components';
import { Dropdown } from 'antd';

import styles from './ActionDropdown.module.scss';

function ActionDropdown(props) {
  const {
    leftIcon,
    rightIcon,
    buttonLabel,
    buttonSize,
    children,
    placement,
    trigger,
    buttonClassname,
    rightIconClass,
    id,
  } = props;

  let leftIconComponent;
  let rightIconComponent;

  if (leftIcon) {
    leftIconComponent = <Icon iconType={leftIcon} classIcon={styles.leftIcon} />;
  }

  if (rightIcon) {
    rightIconComponent = (
      <Icon iconType={rightIcon} classIcon={`${styles.rightIcon} ${rightIconClass}`} />
    );
  }

  const menuOptions = <ActionMenu>{children}</ActionMenu>;

  return (
    <Dropdown
      overlay={menuOptions}
      placement={placement}
      trigger={trigger}
    >
      <Button size={buttonSize} className={buttonClassname} id={id}>
        {leftIconComponent}
        {buttonLabel}
        {rightIconComponent}
      </Button>
    </Dropdown>
  );
}

ActionDropdown.propTypes = {
  id: PropTypes.string,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  children: PropTypes.array,
  buttonSize: PropTypes.string,
  buttonLabel: PropTypes.node,
  placement: PropTypes.string,
  trigger: PropTypes.arrayOf(PropTypes.string),
  buttonClassname: PropTypes.string,
  rightIconClass: PropTypes.string,
};

ActionDropdown.defaultProps = {
  placement: 'bottomLeft',
  trigger: ['hover'],
};

ActionDropdown.ActionMenu = ActionMenu;

export default ActionDropdown;
