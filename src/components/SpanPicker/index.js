import React, { Component } from 'react';
import styles from './SpanPicker.module.scss';
import { Row, Col } from 'react-flexbox-grid/lib';
import { timeWindowToSpan } from 'utils/utils';
import PropTypes from 'prop-types';
import { Dropdown, DateRange, RangePicker, Icon } from 'components';
import moment from 'moment';

const { CALENDAR_ICON } = Icon;

const displayMap = {
  last_7_days: 'Last 7 Days',
  last_30_days: 'Last 30 Days',
  last_90_days: 'Last 90 Days',
  current_week: 'Current Week',
  current_month: 'Current Month',
};

const textSizeMap = {
  default: 'normal',
  large: 'med1',
  small: 'small1',
};

const timeWindowMapper = (timeWindow) => displayMap[timeWindow] || 'Custom...';

class SpanPicker extends Component {
  static propTypes = {
    id: PropTypes.string,
    span: PropTypes.object.isRequired,
    onDateSelect: PropTypes.func.isRequired,
    maxDate: PropTypes.object,
    minDate: PropTypes.object,
    today: PropTypes.object,
    size: PropTypes.string,
    className: PropTypes.string,
    selectorClassName: PropTypes.string,
  };

  static defaultProps = {
    today: moment(),
    minDate: moment().subtract(1, 'year'),
    maxDate: moment(),
  };

  constructor(props) {
    super();
    if (props.span.fixedRange) {
      this.state = { customSelected: false };
    } else {
      this.state = { customSelected: true };
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.span !== this.props.span) {
      if (nextProps.span.fixedRange) {
        this.setState({ customSelected: false });
      } else {
        this.setState({ customSelected: true });
      }
    }
  }

  render() {
    const {
      id,
      size,
      onDateSelect,
      className,
      selectorClassName,
      span,
      today,
      maxDate,
      minDate,
    } = this.props;
    const dropdownSize = size || 'default';
    const textSize = textSizeMap[dropdownSize];

    // Clunky
    let textClass;
    if (dropdownSize === 'default') {
      textClass = styles.dateStringDefault;
    } else {
      textClass = styles.dateString;
    }

    const items = [
      'current_week',
      'current_month',
      'last_7_days',
      'last_30_days',
      'last_90_days',
      'Custom...',
    ];

    // Wrapper for Selector Dropdown onChange. timeWindow passed in, NOT SPAN
    const onSelectWrapper = (timeWindow) => {
      if (timeWindow !== 'Custom...') {
        if (this.state.customSelected) {
          this.setState({ customSelected: false });
        }
        onDateSelect(timeWindowToSpan(timeWindow));
      } else {
        this.setState({ customSelected: true });
      }
    };

    const onCustomSelectWrapper = (dates, dateStrings) => {
      const spanObj = {
        fixedRange: false,
        timeWindow: null,
        startDate: dateStrings[0],
        endDate: dateStrings[1],
      };
      return onDateSelect(spanObj);
    };

    // Subtract 29 days from Min date due to historic keyword data
    const disabledDate = (date) => date < minDate || date > maxDate;
    const defaultRange = span.fixedRange
      ? [today.clone().subtract(29, 'days'), today]
      : [moment.parseZone(span.startDate), moment.parseZone(span.endDate)];

    const renderDateRange = () => {
      if (this.state.customSelected) {
        return (
          <RangePicker
            id={id}
            defaultValue={defaultRange}
            onChange={onCustomSelectWrapper}
            disabledDate={disabledDate}
            className={styles.rangePicker}
            allowClear={false}
          />
        );
      }
      return (
        <div id={id} className={textClass}>
          <DateRange id={id} span={span} size={textSize} showLabel={false} today={today} />
        </div>
      );
    };

    const selected = this.state.customSelected ? 'Custom...' : span.timeWindow;

    return (
      <div id={id} className={className}>
        <Row middle="xs">
          <Col>
            <Dropdown
              id={id}
              label={'Date Range'}
              items={items}
              dropdownLabel={selected}
              size={dropdownSize}
              itemMapping={timeWindowMapper}
              onItemSelect={onSelectWrapper}
              selectorClassName={`${styles.selector} ${selectorClassName}`}
            />
          </Col>
          <Col>
            <div className={styles.icon}>
              <Icon iconType={CALENDAR_ICON} classIcon={styles.calendarIcon} />
            </div>
          </Col>
          <Col>
            {renderDateRange()}
          </Col>
        </Row>
      </div>
    );
  }
}

export default SpanPicker;
