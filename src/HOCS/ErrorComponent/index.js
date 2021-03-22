import React from 'react';
import PropTypes from 'prop-types';

const ErrorComponent = (WrappedErrorComponent) => (WrappedComponent) => {
  const Error = (props) => {
    if (props.error) {
      return <WrappedErrorComponent reason={props.errorReason} />;
    }
    return <WrappedComponent {...props} />;
  };

  Error.propTypes = {
    error: PropTypes.bool,
    errorReason: PropTypes.string,
  };

  return Error;
};

export default ErrorComponent;
