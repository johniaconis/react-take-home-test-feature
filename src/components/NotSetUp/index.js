import React from 'react';
import { GenericCard, Text, Icon } from 'components';
import { Row, Col } from 'react-flexbox-grid/lib';
import styles from './NotSetUp.module.scss';
import { browserHistory } from 'react-router';

const { NOTSETUP_ICON } = Icon;

function NotSetUp() {
  return (
    <GenericCard>
      <Row center={'xs'}>
        <Col xs={12}>
          <Text classText={styles.title} size={'large4'} weight={'med1'} color={'black'}>
            Welcome to 6sense&#39;s ABM & Analytics!
          </Text>
          <br />
          <div className={styles.instruction}>
            <Text classText={styles.instructionText} size={'med2'} color={'black'}>
              Your organization needs some minor setup before you will be able to access all the
              available features.
            </Text>
            <Text classText={styles.instructionText} size={'med2'} color={'black'}>
              If you have recently completed the setup, please allow 24-48 hours for data results to
              be available.
            </Text>
          </div>
          <div>
            <Icon iconType={NOTSETUP_ICON} />
          </div>
          <button
            className={styles.button}
            onClick={() => browserHistory.push('/settings/manage/')}
          >
            <Text color={'white'} size={'large2'}>
              Get Started
            </Text>
          </button>
        </Col>
      </Row>
    </GenericCard>
  );
}

export default NotSetUp;
