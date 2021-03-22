import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'components';

const { ERROR_ICON } = Icon;

const ErrorPropsProxy = (WrappedComponent) => {
  const ErrorComp = (props) => {
    let errorProps = {};
    let errorMessage;
    let errorIconType;
    if (this.props.error) {
      const { errorStatus } = props;
      // This contains the error message mapping.
      // This NEEDS TO CHANGE. just use default for everything right
      switch (errorStatus) {
        case 1:
          errorMessage = 'Network issues! please reload';
          errorIconType = ERROR_ICON;
          break;
        case 2:
          errorMessage = `Dependent Api Call failed, 
          obviously this is not appropriate for a customer error message`;
          errorIconType = ERROR_ICON;
          break;
        default:
          errorMessage = 'YO this is the generic Error Message';
          errorIconType = ERROR_ICON;
          break;
      }
      errorProps = { errorMessage, errorIconType };
    }
    return <WrappedComponent {...props} {...errorProps} />;
  };

  ErrorComp.propTypes = {
    errorStatus: PropTypes.number,
  };

  return ErrorComp;
};

export default ErrorPropsProxy;
