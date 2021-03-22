import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actions } from 'modules/global';
import { alertPropTypes, defaultAlertProps } from '../AlertListener';

const AlertDispatcher = (channel, config = {}) => (WrappedComponent) => {
  const { destroyOnUnmount = true } = config;
  class AlertDispatcherWrapper extends Component {
    static propTypes = {
      updateAlert: PropTypes.func,
      ...alertPropTypes,
    }
    static defaultProps = defaultAlertProps;

    componentWillReceiveProps(nextProps) {
      const { updateAlert, alert, alertMessage, alertType, closeable } = nextProps;
      if (this.props.alert !== alert) {
        updateAlert(channel, { alert, alertMessage, alertType, closeable, ...config });
      }
    }

    componentWillUnmount() {
      if (destroyOnUnmount) {
        this.props.updateAlert(channel);
      }
    }

    render() {
      return (
        <WrappedComponent {...this.props} />
      );
    }
  }
  return connect(null, actions)(AlertDispatcherWrapper);
};

export default AlertDispatcher;
export { ALERT_POSITIONS, ALERT_TYPES } from '../AlertListener';
