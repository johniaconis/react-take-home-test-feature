import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import '../../styles/core.scss';
import styles from './AppContainer.module.scss';
import { NotFound } from 'components';
import { connect } from 'react-redux';

const { Content } = Layout;

export function AppContainerComponent(props) {
  const { children, notFound, stateLocation, router } = props;

  const content = notFound
    ? <NotFound router={router} location={router.location.pathname} stateLocation={stateLocation} />
    : children;

  return (
    <Layout className={styles.appContainer}>
      <Content>
        {content}
      </Content>
    </Layout>
  );
}

AppContainerComponent.propTypes = {
  children: PropTypes.element,
  stateLocation: PropTypes.string,
  notFound: PropTypes.bool,
  router: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  notFound: state.global.notFound,
  stateLocation: state.route.locationBeforeTransitions.pathname,
});

export const AppContainer = connect(mapStateToProps)(AppContainerComponent);
