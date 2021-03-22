import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-flexbox-grid/lib';
import styles from './NoData.module.scss';
import { Card, Icon, Text, Button } from 'components';

const { HELP_ICON } = Icon;

function NoData(props) {
  // Reusable ErrorComponent
  const { message, iconType, className, onClick, buttonText } = props;
  const displayButton = onClick
    ? (<Button style={{ width: 382, margin: 20, height: 54 }} type={'primary'} onClick={onClick}>
      <Text size={'med1'}>
        {buttonText}
      </Text>
    </Button>)
    : null;

  return (
    <Card>
      <div className={`${styles.noData} ${className}`}>
        <Row center="xs" className={styles.icon}>
          <Icon size={'med2'} iconType={iconType} />
        </Row>
        <Row center="xs">
          <div className={styles.message}>
            <Text size={'med1'} weight={'med1'}>
              {message}
            </Text>
          </div>
        </Row>
        <Row center="xs">
          {displayButton}
        </Row>
      </div>
    </Card>
  );
}

NoData.propTypes = {
  message: PropTypes.string,
  iconType: PropTypes.string,
  className: PropTypes.string,
  buttonText: PropTypes.string,
  onClick: PropTypes.func,
};

NoData.defaultProps = {
  size: 'med2',
  message: 'No Data yet',
  iconType: HELP_ICON,
  buttonText: 'Create',
};

export default NoData;
