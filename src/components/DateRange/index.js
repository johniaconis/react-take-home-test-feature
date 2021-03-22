import React from 'react';
import { spanToDisplayRange } from 'utils/utils';
import PropTypes from 'prop-types';
import styles from './DateRange.module.scss';
import { LabelText, Icon, Text } from 'components';

const { CALENDAR_ICON } = Icon;

function DateRange(props) {
  const { span, size, weight, showLabel, showIcon, today, color, id } = props;

  const renderLabel = () =>
    showLabel
      ? <LabelText size={size} className={styles.label}>
          Date Range
        </LabelText>
      : null;

  const renderIcon = () =>
    showIcon ? <Icon iconType={CALENDAR_ICON} classIcon={styles.calendarIcon} /> : null;
  return (
    <div id={id}>
      {renderLabel()}
      {renderIcon()}
      <Text size={size} weight={weight} color={color}>
        {spanToDisplayRange(span, today)}
      </Text>
    </div>
  );
}

DateRange.propTypes = {
  id: PropTypes.string,
  span: PropTypes.object,
  size: PropTypes.string,
  weight: PropTypes.string,
  showLabel: PropTypes.bool,
  showIcon: PropTypes.bool,
  color: PropTypes.string,
  today: PropTypes.object,
};

DateRange.defaultProps = {
  size: 'normal',
  weight: 'med1',
  showLabel: true,
  showIcon: false,
};

export default DateRange;
