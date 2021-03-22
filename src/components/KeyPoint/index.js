import React from 'react';
import styles from './KeyPoint.module.scss';
import { Row, Col } from 'react-flexbox-grid/lib';
import PropTypes from 'prop-types';
import { Text, Icon } from 'components';

function KeyPoint(props) {
  const {
    topLabel,
    bottomLabel,
    classIcon,
    justify = { center: 'xs' },
    value,
    size,
    onClick,
    iconType,
    className,
    iconTitle,
    labelClass,
    id,
  } = props;

  let labelColor = 'labelColor';
  let labelSize;
  let valueSize;
  let labelWeight;
  let valueWeight;
  let valueColor;
  let iconSize;
  let paddingClass = '';
  let textClass = '';
  let customClass = '';
  let customLabelClass = '';
  let labelContent;
  let iconColor;

  switch (size) {
    case 'small':
      labelSize = 'small1';
      valueSize = 'small1';
      labelWeight = 'normal';
      valueWeight = 'med1';
      valueColor = 'normal';
      iconSize = styles.iconSmall;
      paddingClass = styles.paddingExtraSmall;
      textClass = styles.textSmall;
      customLabelClass = styles.labelSmall;
      break;
    case 'accountList':
      labelSize = 'accountCardSize';
      valueSize = 'accountCardSize';
      valueColor = 'normal';
      labelWeight = 'normal';
      valueWeight = 'med1';
      iconSize = styles.iconAccountList;
      textClass = styles.text;
      break;
    case 'normal':
      labelSize = 'normal';
      valueSize = 'med1';
      labelWeight = 'normal';
      valueWeight = 'med1';
      valueColor = 'normal';
      iconSize = styles.iconDefault;
      paddingClass = styles.paddingSmall;
      textClass = styles.text;
      break;
    case 'medium':
      iconSize = 'normal';
      labelSize = 'normal';
      valueSize = 'med2';
      labelWeight = 'normal';
      valueWeight = 'med1';
      valueColor = 'normal';
      iconSize = styles.iconMedium;
      paddingClass = styles.paddingMedium;
      textClass = styles.text;
      break;
    case 'large':
      labelSize = 'med2';
      valueSize = 'large2';
      labelWeight = 'med1';
      valueWeight = 'med2';
      valueColor = 'normal';
      iconSize = styles.iconLarge;
      paddingClass = styles.paddingLarge;
      textClass = styles.text;
      break;
    case 'headband':
      labelSize = 'med2';
      valueSize = 'large2';
      labelWeight = 'med2';
      valueWeight = 'med2';
      valueColor = 'white';
      iconColor = 'white';
      iconSize = styles.iconHeadband;
      labelColor = 'headbandLabelColor';
      paddingClass = styles.valueHeadband;
      customClass = styles.outerHeadband;
      customLabelClass = styles.labelHeadband;
      textClass = styles.text;
      break;
    case 'title':
      labelSize = 'normal';
      valueSize = 'small1';
      labelWeight = 'med1';
      valueWeight = 'normal';
      valueColor = 'grey6';
      labelColor = 'dark';
      iconSize = styles.iconSmall;
      paddingClass = styles.paddingTitle;
      textClass = styles.text;
      customLabelClass = styles.labelTitle;
      customClass = styles.outerTitle;
      break;
    case 'titleKPI':
      labelSize = 'med1';
      valueSize = 'small1';
      labelWeight = 'med1';
      valueWeight = 'normal';
      valueColor = 'grey6';
      labelColor = 'dark';
      iconSize = styles.iconMed1;
      paddingClass = styles.paddingTitle;
      textClass = styles.text;
      customLabelClass = styles.labelTitleKPI;
      customClass = styles.outerTitle;
      break;
    default:
      labelSize = 'normal';
      valueSize = 'med1';
      valueColor = 'normal';
      labelWeight = 'normal';
      valueWeight = 'med1';
      iconSize = styles.iconDefault;
      textClass = styles.text;
      customLabelClass = labelClass || '';
  }

  const labels = (
    <Text size={labelSize} color={labelColor} weight={labelWeight}>
      {topLabel}
      <br />
      {bottomLabel}
    </Text>
  );
  const displayValue = (
    <Text color={valueColor} size={valueSize} weight={valueWeight}>
      {value}
    </Text>
  );
  const displayIcon = (
    <Icon classIcon={classIcon} iconType={iconType} color={iconColor} title={iconTitle} />
  );

  if (size === 'headband') {
    const headbandLabel = (
      <span id="headbandLabelID">
        {topLabel}
        <br />
        {bottomLabel}
      </span>
    );
    labelContent = <div className={`${styles.label} ${customLabelClass}`}>{headbandLabel}</div>;
  } else {
    labelContent = <div className={`${styles.label} ${customLabelClass}`}>{labels}</div>;
  }

  let content;
  if (iconType === undefined) {
    content = (
      <div className={`${styles.outer} ${customClass} ${className}`} id={id} onClick={onClick}>
        <Row {...justify} top="xs">
          <div className={styles.text}>
            <Col>
              <Row {...justify}>
                <div className={paddingClass}>{displayValue}</div>
              </Row>
              <Row {...justify}>{labelContent}</Row>
            </Col>
          </div>
        </Row>
      </div>
    );
  } else {
    content = (
      <div className={`${styles.outer} ${customClass} ${className}`} id={id} onClick={onClick}>
        <Row start="xs" top="xs">
          <div className={iconSize}>{displayIcon}</div>
          <div className={textClass}>
            <Col>
              <Row>
                <div className={paddingClass}>{displayValue}</div>
              </Row>
              <Row>{labelContent}</Row>
            </Col>
          </div>
        </Row>
      </div>
    );
  }

  return content;
}

KeyPoint.propTypes = {
  icon: PropTypes.string,
  topLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  bottomLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  customClass: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  className: PropTypes.string,
  classIcon: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func,
};

export default KeyPoint;
