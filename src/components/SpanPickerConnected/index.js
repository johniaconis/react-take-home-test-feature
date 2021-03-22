import React from 'react';
import PropTypes from 'prop-types';
import { SpanPicker } from 'components';

function WrappedSpanPicker(props) {
  const { lastUpdated, trackingSince, ...rest } = props;
  const minDate = trackingSince.subtract(29, 'days');
  return <SpanPicker today={lastUpdated} minDate={minDate} maxDate={lastUpdated} {...rest} />;
}

WrappedSpanPicker.propTypes = {
  lastUpdated: PropTypes.object,
  trackingSince: PropTypes.object,
};

import { connect } from 'react-redux';
import { lastUpdatedSelector, trackingSinceSelector } from 'modules/user/selectors';

const mapStateToProps = (state) => ({
  lastUpdated: lastUpdatedSelector(state),
  trackingSince: trackingSinceSelector(state),
});

const SpanPickerConnected = connect(mapStateToProps)(WrappedSpanPicker);
export default SpanPickerConnected;
