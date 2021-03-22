import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown, Button } from 'antd';
import { Icon } from 'components';
import { MenuOptions } from './MenuOptions';
import styles from './ButtonDropdown.module.scss';

function ButtonDropdown(props) {
  const { leftIcon, rightIcon, className, useGlobalMapper, labelKey, valueKey,
    options, groupByOptions, onSelect, buttonClass, itemClass, id } = props;

  let leftIconComponent;
  let rightIconComponent;

  if (leftIcon) {
    leftIconComponent = (
      <Icon iconType={leftIcon} classIcon={styles.leftIcon} />
    );
  }

  if (rightIcon) {
    rightIconComponent = (
      <Icon iconType={rightIcon} classIcon={styles.rightIcon} />
    );
  }

  const menuOptionsProps = {
    useGlobalMapper, labelKey, valueKey, options, groupByOptions, onSelect, itemClass,
  };

  /* Unfotunately, antd fails if this is a component vs. a function
     So this is a hacky solution.  Ideally, this should be called as a
     component and not a function */

  return (
    <div className={className}>
      <Dropdown overlay={MenuOptions(menuOptionsProps)}>
        <Button size={'large'} className={buttonClass} id={id}>
          {leftIconComponent}
          {props.children}
          {rightIconComponent}
        </Button>
      </Dropdown>
    </div>
  );
}

ButtonDropdown.propTypes = {
  id: PropTypes.string,
  itemClass: PropTypes.string,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  className: PropTypes.string,
  buttonClass: PropTypes.string,
  children: PropTypes.node,
  useGlobalMapper: PropTypes.bool,
  labelKey: PropTypes.string,
  valueKey: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  groupByOptions: PropTypes.objectOf(PropTypes.array),
  onSelect: PropTypes.func,
};

ButtonDropdown.MenuOptions = MenuOptions;

export default ButtonDropdown;
