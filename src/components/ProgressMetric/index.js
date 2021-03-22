import { Progress } from 'antd';
import React from 'react';
import styles from './ProgressMetric.module.scss';
import { Row, Col } from 'react-flexbox-grid/lib';
import PropTypes from 'prop-types';
import { truncateString } from 'utils/utils';
import { Text } from 'components';

function ProgressMetric(props) {
  const { title, metric, value, total, showPercentage, width, onClick } = props;
  const MAX_STRING_LENGTH = 35; // TODO probably want to make this global

  const diplayTitle =
    typeof title === 'string' || title instanceof String
      ? truncateString(title, MAX_STRING_LENGTH)
      : title;
  let progressWidth;
  if (width) {
    progressWidth = { width };
  }
  let percent = null;
  if (showPercentage) {
    const fraction = value / total;
    percent = fraction * 100;
  }
  percent = parseFloat(parseFloat(percent).toFixed(1));
  return (
    <div className={styles.progress} onClick={onClick}>
      <Row>
        <Text size="med1">
          <span>
            {diplayTitle}
          </span>
        </Text>
      </Row>
      <Row>
        <Col>
          <div className={styles.value}>
            <Text>
              {value.toLocaleString()}
            </Text>
          </div>
        </Col>
        <Col>
          <Text color="grey6">
            {metric}
          </Text>
        </Col>
      </Row>
      <Row>
        <Progress percent={percent} style={progressWidth} />
      </Row>
    </div>
  );
}

ProgressMetric.propTypes = {
  title: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  metric: PropTypes.string,
  value: PropTypes.number,
  total: PropTypes.number,
  showPercentage: PropTypes.bool,
  width: PropTypes.number,
  onClick: PropTypes.func,
};

export default ProgressMetric;
