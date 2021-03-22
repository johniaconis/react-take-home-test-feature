import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function ConnectedComponent(WrappedComponent, mapStateToProps) {
  const Connected = (props) => <WrappedComponent {...props} />;

  Connected.propTypes = {
    error: PropTypes.bool,
    errorReason: PropTypes.string,
  };

  return connect(mapStateToProps)(Connected);
}

export default ConnectedComponent;
