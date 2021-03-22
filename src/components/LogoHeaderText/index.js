import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid/lib';
import { Text, SixSenseLogo } from 'components';
import styles from './LogoHeaderText.module.scss';

function LogoHeaderText(props) {
  const { title, logoClassName, noDivider, light, textClassName, id } = props;
  return (
    <Col xs={12} id={id}>
      <Row>
        <span className={styles.logo}>
          <SixSenseLogo className={logoClassName} light={light} />
        </span>
        { noDivider ? null : (<div className={styles.divider} />) }
        <div className={`${styles.logoText} ${textClassName || ''}`}>
          <Text color="lighter" size="med2">{title}</Text>
        </div>
      </Row>
    </Col>
  );
}

LogoHeaderText.propTypes = {
  id: PropTypes.string,
  light: PropTypes.bool,
  textClassName: PropTypes.string,
  noDivider: PropTypes.bool,
  logoClassName: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default LogoHeaderText;
