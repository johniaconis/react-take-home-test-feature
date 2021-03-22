import React, { Component } from 'react';
import { Alert } from 'components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { uniqueId } from 'lodash';
import styles from './AlertListener.module.scss';
import { alertPropsSelector } from 'modules/global/selectors';

export const ALERT_POSITIONS = {
  POSITION_BOTTOM: 'bottom',
  POSITION_TOP: 'top',
};

export const ALERT_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
};

export const alertPropTypes = {
  closeable: PropTypes.bool,
  alert: PropTypes.bool,
  alertMessage: PropTypes.string,
  alertType: PropTypes.oneOf([
    ALERT_TYPES.SUCCESS,
    ALERT_TYPES.ERROR,
  ]),
};

export const defaultAlertProps = {
  closable: true,
  alertType: ALERT_TYPES.ERROR,
};

const defaultConfig = {
  banner: true,
  position: ALERT_POSITIONS.POSITION_BOTTOM,
  isModal: false,
};

const AlertListener = (channel, config = {}) => (WrappedComponent) => {
  const safeConfig = { ...defaultConfig, ...config };
  class AlertListenerWrapper extends Component {

    static propTypes = alertPropTypes
    static defaultProps = defaultAlertProps;

    constructor(props) {
      super(props);
      this.state = {
        key: uniqueId(),
      };
    }

    componentWillReceiveProps(nextProps) {
      if (!this.props.alert && nextProps.alert) {
        this.setState({ key: uniqueId() });
      }
    }

    render() {
      const { closeable, alertMessage, alert, alertType, ...restProps } = this.props;
      const { className, position, isModal, banner } = safeConfig;
      let alertClassName = className;
      if (isModal) {
        alertClassName = `${styles.alertModalBanner} ${className}`;
      }

      const alertBar = alert ?
        (
          <Alert
            key={this.state.key}
            className={alertClassName}
            type={alertType}
            message={alertMessage}
            closable={closeable}
            banner={banner}
          />
        )
        : null;

      let content;
      switch (position) {
        case ALERT_POSITIONS.POSITION_TOP:
          content = (
            <div>
              {alertBar}
              <WrappedComponent {...restProps} />
            </div>
          );
          break;
        case ALERT_POSITIONS.POSITION_BOTTOM:
          content = (
            <div>
              <WrappedComponent {...restProps} />
              {alertBar}
            </div>
          );
          break;
        default:
          content = (
            <div>
              <WrappedComponent {...restProps} />
              {alertBar}
            </div>
          );
      }

      return (
        <div>
          {content}
        </div>
      );
    }
  }
  const mapStateToProps = (state) => ({
    ...alertPropsSelector(channel)(state),
  });
  return connect(mapStateToProps)(AlertListenerWrapper);
};

export default AlertListener;
