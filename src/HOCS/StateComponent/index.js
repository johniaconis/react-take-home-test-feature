import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ErrorComponent, ZeroData, Loading, NoData } from 'components';

const StateComponent = (
  WrappedComponent,
  errorComponent,
  zeroDataComponent,
  noDataComponent,
  loadingComponent
) =>
  class StateClass extends Component {
    // Default to page level defaults
    static propTypes = {
      error: PropTypes.bool,
      errorMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
      zeroData: PropTypes.bool,
      noData: PropTypes.bool,
      onNoData: PropTypes.func,
      noDataMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
      zeroDataMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
      onRefresh: PropTypes.func,
      loading: PropTypes.bool,
      className: PropTypes.string,
      size: PropTypes.string,
      loadingSize: PropTypes.string,
      noDataIcon: PropTypes.string,
      noDataButtonText: PropTypes.string,
    };

    static defaultProps = {
      size: 'med1',
      loadingSize: 'large',
    };

    render() {
      const {
        error,
        errorMessage,
        zeroData,
        zeroDataMessage,
        noData,
        noDataMessage,
        onNoData,
        onRefresh,
        loading,
        className,
        size,
        loadingSize,
        noDataIcon,
        noDataButtonText,
      } = this.props;

      if (loading) {
        const LoadingDisplay = loadingComponent || Loading;
        return <LoadingDisplay className={className} size={loadingSize} loading={loading} />;
      }
      if (error) {
        const ErrorDisplayComponent = errorComponent || ErrorComponent;
        return (
          <ErrorDisplayComponent
            className={className}
            message={errorMessage}
            onClick={onRefresh}
            size={size}
          />
        );
      }
      if (noData) {
        const NoDataDisplay = noDataComponent || NoData;
        return (
          <NoDataDisplay
            iconType={noDataIcon}
            className={className}
            size={size}
            buttonText={noDataButtonText}
            onClick={onNoData}
            message={noDataMessage}
          />
        );
      }
      if (zeroData) {
        const ZeroDataDisplay = zeroDataComponent || ZeroData;
        return (
          <ZeroDataDisplay
            message={zeroDataMessage}
            onClick={onRefresh}
            className={className}
            size={size}
          />
        );
      }

      return <WrappedComponent {...this.props} />;
    }
  };

export default StateComponent;
