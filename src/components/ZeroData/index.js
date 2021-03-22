import React from 'react';
import PropTypes from 'prop-types';
import { Text, Icon, GenericMessage } from 'components';
import { Row } from 'react-flexbox-grid/lib';
import styles from './ZeroData.module.scss';
import { CurryComponent } from 'HOCS';

const { URSA_MAJOR_ICON } = Icon;

// Mark for Deprecation
function ZeroDataComponent(props) {
  // Reusable ErrorComponent
  const { message, zeroDataIconType, className, onClick, size } = props;
  return (
    <div onClick={onClick} className={`${styles.siuiZeroData} ${className}`}>
      <Row center="xs">
        <Icon size={size} iconType={zeroDataIconType} />
      </Row>
      <Row center="xs">
        <Text size={size}>
          {message}
        </Text>
      </Row>
    </div>
  );
}

ZeroDataComponent.propTypes = {
  message: PropTypes.string,
  zeroDataIconType: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.string,
};

const ZeroData = CurryComponent(GenericMessage, {
  messageLevel: 'page',
  iconType: URSA_MAJOR_ICON,
});

ZeroData.propTypes = {
  message: PropTypes.string,
  zeroDataIconType: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.string,
};

ZeroData.defaultProps = {
  message: 'No Data Available',
  zeroDataIconType: URSA_MAJOR_ICON,
};

export default ZeroData;
