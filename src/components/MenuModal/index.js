import React from 'react';
import PropTypes from 'prop-types';
import { AlertError } from 'HOCS';
import { Modal, LogoHeaderText, Tabs } from 'components';

import styles from './MenuModal.module.scss';

// let the message be passed from the parent in this case
const TabsWithAlerts = AlertError({}, true, true)(Tabs);

function MenuModal(props) {
  const { title, visible, close, footer, children, alertError, errorMessage } = props;

  const addedProps = {};
  if (footer) {
    addedProps.footer = footer;
  }

  return (
    <Modal
      title={<LogoHeaderText title={title} />}
      visible={visible}
      className={styles.modal}
      maskClosable={false}
      onCancel={close}
      width="85%"
      {...addedProps}
    >
      <TabsWithAlerts
        key={1}
        tabPosition={'left'}
        alertError={alertError}
        errorMessage={errorMessage}
      >
        {children}
      </TabsWithAlerts>
    </Modal>
  );
}

MenuModal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  visible: PropTypes.bool,
  // tabs: PropTypes.arrayOf(PropTypes.object),
  close: PropTypes.func,
  footer: PropTypes.array,
  alertError: PropTypes.bool,
  errorMessage: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

export default MenuModal;
