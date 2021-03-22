import React from 'react';
import PropTypes from 'prop-types';
import { DateRange } from 'components';

function WrappedDateRange(props) {
  const { lastUpdated, ...rest } = props;
  return <DateRange today={lastUpdated} {...rest} />;
}

WrappedDateRange.propTypes = {
  lastUpdated: PropTypes.object,
};

import { connect } from 'react-redux';
import { lastUpdatedSelector } from 'modules/user/selectors';

const mapStateToProps = (state) => ({
  lastUpdated: lastUpdatedSelector(state),
});

const DateRangeConnected = connect(mapStateToProps)(WrappedDateRange);
export default DateRangeConnected;
