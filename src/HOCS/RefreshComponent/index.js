import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { routePathnameSelector } from 'modules/global/selectors';
import { connect } from 'react-redux';

function RefreshComponent(WrappedComponent, exceptions = []) {
  class Refresh extends Component {
    static propTypes = {
      refresh: PropTypes.func.isRequired,
      nextLocation: PropTypes.string.isRequired,
    };

    componentWillUnmount() {
      if (!exceptions.filter((route) => !route.startsWith(this.props.nextLocation)).length) {
        this.props.refresh();
      }
    }

    render() {
      return (
        <WrappedComponent {...this.props} />
      );
    }

  }

  return connect((state) => ({ nextLocation: routePathnameSelector(state) }))(Refresh);
}

export default RefreshComponent;
