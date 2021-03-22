import React from 'react';
import PropTypes from 'prop-types';
import { Tabs } from 'antd';
import { Icon } from 'components';
import styles from './Tab.module.scss';

const { CHECK_CIRCLE_ICON, TIMES_CIRCLE_ICON } = Icon;

const TabPane = Tabs.TabPane;

function Tab(props) {
  const { children, eventKey, ...newProps } = props;

  return (
    <TabPane {...newProps} key={eventKey}>
      {children}
    </TabPane>
  );
}

Tab.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  tab: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  eventKey: PropTypes.string,
};

function TabTitle(props) {
  const { title, showFeedback, required, isValid, customIcon, isInvalid, id } = props;

  if (customIcon) {
    return (
      <span className={styles.tabTitle} id={id}>
        {title}
        <span className={styles.customIcon}>
          {customIcon}
        </span>
      </span>
    );
  }

  if (showFeedback && isValid) {
    return (
      <span className={styles.tabTitle} id={id}>
        {title}
        <Icon classIcon={styles.icon} iconType={CHECK_CIRCLE_ICON} />
      </span>
    );
  }

  if (showFeedback && isInvalid) {
    return (
      <span title="This section is required." id={id}>
        {title}
        <Icon classIcon={styles.iconError} iconType={TIMES_CIRCLE_ICON} />
      </span>
    );
  }

  if (showFeedback && required) {
    return (
      <span className={styles.tabTitle} id={id}>
        <span className={styles.required}>*</span>
        {title}
      </span>
    );
  }

  return (
    <span className={styles.tabTitle} id={id}>
      {title}
    </span>
  );
}

TabTitle.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  showFeedback: PropTypes.bool,
  required: PropTypes.bool,
  isValid: PropTypes.bool,
  // custom Icon will override isvalid checkmark
  customIcon: PropTypes.element,
  isInvalid: PropTypes.bool,
};

Tab.TabTitle = TabTitle;

export default Tab;
