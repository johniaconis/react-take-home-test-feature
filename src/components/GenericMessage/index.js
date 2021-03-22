import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-flexbox-grid/lib';
import styles from './GenericMessage.module.scss';
import { Text, Icon } from 'components';

function GenericMessage(props) {
  const { message, iconType, iconColor, className, onClick, messageLevel } = props;
  let iconSize;
  let textSize;
  let positioningClass;
  switch (messageLevel) {
    case 'page':
      iconSize = 'large1';
      textSize = 'large1';
      positioningClass = styles.pageLevelPositioning;
      break;
    case 'card':
      iconSize = 'med2';
      textSize = 'med1';
      positioningClass = styles.cardLevelPositioning;
      break;
    default:
      iconSize = 'large1';
      textSize = 'large1';
      positioningClass = styles.pageLevelPositioning;
  }
  return (
    <div onClick={onClick} className={`${positioningClass} ${className}`}>
      <Row center="xs">
        <Icon size={iconSize} iconType={iconType} color={iconColor} />
      </Row>
      <Row center="xs">
        <div className={styles.message}>
          <Text size={textSize} color={'grey11'}>{message}</Text>
        </div>
      </Row>
    </div>
  );
}

GenericMessage.propTypes = {
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  iconType: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  messageLevel: PropTypes.string,
  iconColor: PropTypes.string,
};

export default GenericMessage;
