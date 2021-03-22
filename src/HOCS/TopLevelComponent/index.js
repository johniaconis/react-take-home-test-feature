import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TopLevelWrapper } from 'components';

function TopLevelComponent(WrappedComponent) {
  return class TopLevel extends Component {
    static propTypes = {
      load: PropTypes.func.isRequired,
      loaded: PropTypes.bool.isRequired,
    };

    componentWillMount() {
      if (!this.props.loaded) {
        this.props.load();
      }
    }

    render() {
      return (
        <TopLevelWrapper>
          <WrappedComponent {...this.props} />
        </TopLevelWrapper>
      );
    }
  };
}

export default TopLevelComponent;
