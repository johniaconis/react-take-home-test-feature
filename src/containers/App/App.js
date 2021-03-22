import React, { Component } from 'react';
import PropTypes from 'prop-types';
import enUS from 'antd/lib/locale-provider/en_US';
import { Spin, LocaleProvider, Layout } from 'antd';
import { Grid, Row } from 'react-flexbox-grid/lib';
import { Navbar } from 'containers';
import { actions as userActions } from 'modules/user';
import { actions as labelActions } from 'modules/labels';
import styles from './App.module.scss';
import { StateComponent, AlertListener } from 'HOCS';
import { NotFound } from 'components';
import { htmlStrings } from 'utils/constants';
import { userSelectionLoadingSelector } from 'modules/user/selectors';

const { Footer } = Layout;
const { load: userLoadAction } = userActions;
const { loadLabels } = labelActions;

// manages standard layout for each page
export class AppComponent extends Component {
  componentWillMount() {
    // calls top level module loading
    // until everything is loaded, children will not render
    if (!this.props.userLoaded) {
      this.props.userLoad();
    }
    if (!this.props.labelsLoaded) {
      this.props.loadLabels();
    }
  }

  render() {
    const loading = this.props.userLoading || this.props.labelsLoading;
    let content;
    if (loading) {
      content = (
        <div className={styles.appBody}>
          <Row center="xs" className={styles.loadingWrapper}>
            <Spin size="large" />
          </Row>
        </div>
      );
    } else {
      content = (
        <LocaleProvider locale={enUS}>
          <div className={styles.appBody}>
            <Grid fluid>
              {this.props.children}
            </Grid>
          </div>
        </LocaleProvider>
      );
    }

    const AlertedNavbar = AlertListener('navbar')(Navbar);

    return (
      <div>
        <AlertedNavbar currentPath={this.props.pathname} />
        {content}
        <Footer className={styles.footer}>
          <a href="https://support.6sense.com" target="_blank" rel="noopener noreferrer">
            Support
          </a>
          &nbsp;&nbsp;&#183;&nbsp;&nbsp;
          <a href="https://6sense.com/terms-of-service/" target="_blank" rel="noopener noreferrer">
            Terms of Service
          </a>
          &nbsp;&nbsp;&#183;&nbsp;&nbsp;6sense&nbsp;&copy;&nbsp;2017
        </Footer>
      </div>
    );
  }
}

import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  userLoading: userSelectionLoadingSelector(state),
  pathname: state.route.locationBeforeTransitions.pathname,
  labelsLoading: state.labels.loading,
  userLoaded: state.user.loaded,
  labelsLoaded: state.labels.loaded,
  errorMessage: htmlStrings.TOP_LEVEL_ERROR,
  error:
    state.user.error || state.labels.error,
});

AppComponent.propTypes = {
  children: PropTypes.element,
  pathname: PropTypes.string,
  userLoading: PropTypes.bool,
  userLoaded: PropTypes.bool,
  userLoad: PropTypes.func,
  labelsLoaded: PropTypes.bool,
  loadLabels: PropTypes.func,
  labelsLoading: PropTypes.bool,
};

export const App = connect(mapStateToProps, {
  userLoad: userLoadAction,
  loadLabels,
})(StateComponent(AppComponent, NotFound));
