import React from 'react';
import styles from './ThreeLinedKV.module.scss';
import PropTypes from 'prop-types';
import { LabelText, ValueText } from 'components';

function ThreeLinedKV(props) {
  const { value, topLabel, bottomLabel } = props;

  let valueDisplay;
  if (value || value === 0) {
    valueDisplay = (<ValueText size="med1">{value}</ValueText>);
  }

  let topLabelDisplay;
  if (topLabel) {
    topLabelDisplay = (<LabelText size="normal">{topLabel}</LabelText>);
  }

  let bottomLabelDisplay;
  if (bottomLabel) {
    bottomLabelDisplay = (<LabelText size="normal">{bottomLabel}</LabelText>);
  }

  return (
    <div className={styles.container}>
      {valueDisplay}<br />
      {topLabelDisplay}<br />
      {bottomLabelDisplay}
    </div>
  );
}

ThreeLinedKV.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  topLabel: PropTypes.string,
  bottomLabel: PropTypes.string,
};

export default ThreeLinedKV;
