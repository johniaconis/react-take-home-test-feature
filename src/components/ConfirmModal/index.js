import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid/lib';
import { Modal, Icon, Text, Button } from 'components';
import styles from './ConfirmModal.module.scss';

const { HELP_ICON } = Icon;

function ConfirmModal(props) {
  const { visible, title, content, loading, onOk, onCancel, okText } = props;

  let titleText;
  if (title) {
    titleText = (
      <div className={styles.title}>
        <Text weight="med2" size="med1">{title}</Text>
      </div>
    );
  }

  return (
    <Modal
      visible={visible}
      closable={false}
      maskClosable={false}
      footer={null}
      width={400}
    >
      <Col xs={12} className={styles.content}>
        <Row middle="xs">
          <Col xs={2} className={styles.icon}>
            <Icon iconType={HELP_ICON} color="orange" size="medium1" />
          </Col>
          <Col xs={9}>
            {titleText}
            <div>
              <Text weight="med">{content}</Text>
            </div>
          </Col>
        </Row>
        <Row end="xs" className={styles.buttonBlocks}>
          <Button
            size="large"
            className={styles.cancel}
            disabled={loading}
            onClick={onCancel}
          >
            Cancel
          </Button>
          <Button
            type="primary"
            size="large"
            className={styles.ok}
            loading={loading}
            onClick={onOk}
          >
            {okText}
          </Button>
        </Row>
      </Col>
    </Modal>
  );
}

ConfirmModal.propTypes = {
  visible: PropTypes.bool,
  loading: PropTypes.bool,
  title: PropTypes.string,
  content: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
  okText: PropTypes.string,
};

ConfirmModal.defaultProps = {
  okText: 'Ok',
};

export default ConfirmModal;
