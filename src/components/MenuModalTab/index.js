import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Text } from 'components';
import styles from './MenuModalTab.module.scss';

function MenuModalTab(props) {
  const { children, tab, required, isValid, showFeedback, ...newProps } = props;

  let requiredText;
  if (required && !isValid && showFeedback) {
    requiredText = (
      <Text weight="light1" size="small1" color="blue" classText={styles.requiredText}>
        &#40;Required Step&#41;
      </Text>
    );
  }

  return (
    <Tab {...newProps}>
      <div className={styles.tabWindow}>
        <div className={styles.contentWrapper}>
          <div className={styles.header}>
            <Text weight="med2" size="large1">
              {tab}
            </Text>
            {requiredText}
          </div>
          <div>
            {children}
          </div>
        </div>
      </div>
    </Tab>
  );
}

MenuModalTab.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  tab: PropTypes.object,
  required: PropTypes.bool,
  isValid: PropTypes.bool,
  showFeedback: PropTypes.bool,
};

export default MenuModalTab;
