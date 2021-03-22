import React from 'react';
import styles from './LabelDivider.module.scss';
import PropTypes from 'prop-types';
import { LabelText } from 'components';

function LabelDivider(props) {
  const { label, className, labelClass, dividerDistance } = props;

  const labelComp =
    typeof label === 'string'
      ? (<LabelText className={`${styles.label} ${labelClass}`}>
        {label}
      </LabelText>)
      : (<div className={`${styles.label} ${labelClass}`}>
        {label}
      </div>);

  let dividerDistanceClass;
  switch (dividerDistance) {
    case 'small':
      dividerDistanceClass = styles.dividerDistanceSmall;
      break;
    case 'large':
      dividerDistanceClass = styles.dividerDistanceLarge;
      break;
    case 'medium':
      dividerDistanceClass = styles.dividerDistanceMedium;
      break;
    default:
      dividerDistanceClass = styles.dividerDistanceDefault;
  }

  const classDivider = `${dividerDistanceClass} ${styles.divider} ${className}`;

  return (
    <div className={classDivider}>
      {labelComp}
    </div>
  );
}

LabelDivider.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  labelClass: PropTypes.string,
  className: PropTypes.string,
  dividerDistance: PropTypes.string,
};

export default LabelDivider;
