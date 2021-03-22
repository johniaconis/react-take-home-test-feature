import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'components';
import { uniqueId } from 'lodash';
import styles from './AlertError.module.scss';

function AlertError(errorMapping, closable, isModal) {
  return (WrappedComponent) =>
    class AlertErrorComponent extends Component {
      static propTypes = {
        alertErrorStatus: PropTypes.number,
        saveErrorStatus: PropTypes.number,
        alertClassname: PropTypes.string,
        alertError: PropTypes.bool,
        saveError: PropTypes.bool,
        success: PropTypes.bool,
        errorMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        successMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      }

      constructor(props) {
        super(props);
        this.state = {
          key: uniqueId(),
        };
      }

      componentWillReceiveProps(nextProps) {
        if (!this.props.alertError && nextProps.alertError) {
          return this.setState({ key: uniqueId() });
        }

        if (!this.props.saveError && nextProps.saveError) {
          return this.setState({ key: uniqueId() });
        }
        return null;
      }

      render() {
        const {
          alertError,
          saveError,
          alertErrorStatus,
          saveErrorStatus,
          errorMessage,
          successMessage,
          success,
          alertClassname,
        } = this.props;

        let alertErrorBar;
        let className = `${styles.alertBanner} ${alertClassname}`;

        if (isModal) {
          className = `${styles.alertModalBanner} ${alertClassname}`;
        }

        if (success) {
          alertErrorBar = (
            <Alert
              key={this.state.key}
              className={className}
              type={'success'}
              message={successMessage}
              closable={closable}
              banner
            />
          );
        }

        if (alertError || saveError) {
          if (alertErrorStatus === 1) {
            // Error before we even submit
            alertErrorBar = (
              <Alert
                key={this.state.key}
                className={className}
                type={'error'}
                message={errorMessage || errorMapping[1]}
                closable={closable}
                banner
              />
            );
          } else if (saveErrorStatus === 400 || alertErrorStatus === 400) {
            // Error after we submit
            alertErrorBar = (
              <Alert
                key={this.state.key}
                className={className}
                type={'error'}
                message={errorMessage || errorMapping[400]}
                closable={closable}
                banner
              />
            );
          } else {
            alertErrorBar = (
              <Alert
                key={this.state.key}
                className={className}
                type={'error'}
                message={errorMessage || errorMapping.default}
                closable={closable}
                banner
              />
            );
          }
        }

        return (
          <div>
            {alertErrorBar}
            <WrappedComponent {...this.props} />
          </div>
        );
      }
    };
}

export default AlertError;
