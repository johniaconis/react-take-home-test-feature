import React from 'react';
import styles from './LabelPair.module.scss';
import { Row, Col } from 'react-flexbox-grid/lib';
import PropTypes from 'prop-types';
import { LabelText, ValueText } from 'components';

function LabelPair(props) {
  const { label, content } = props;
  return (
    <Row>
      <Col xs={6}>
        <Row end="xs">
          <LabelText className={styles.label}>
            {label}
          </LabelText>
        </Row>
      </Col>
      <Col xs={6}>
        <Row start="xs">
          <ValueText className={styles.value}>
            {content}
          </ValueText>
        </Row>
      </Col>
    </Row>
  );
}

LabelPair.propTypes = {
  label: PropTypes.string,
  content: PropTypes.string,
};

export default LabelPair;
