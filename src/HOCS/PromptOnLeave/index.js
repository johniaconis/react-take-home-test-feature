import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'modules/global';
import { isViewModeSelector } from 'modules/global/selectors';
import PropTypes from 'prop-types';

const PromptOnLeave = (transitionMessage, promptWhen) => (WrappedComponent) => {
  class Prompt extends Component {
    static propTypes = {
      setPromptOnLeave: PropTypes.func,
      clearPromptOnLeave: PropTypes.func,
      onLeave: PropTypes.func,
    }

    componentWillMount() {
      const { setPromptOnLeave } = this.props;
      setPromptOnLeave(transitionMessage, promptWhen);
    }

    componentWillUnmount() {
      // Location change has been accepted so clear the checks
      const { clearPromptOnLeave, onLeave } = this.props;
      clearPromptOnLeave();
      if (onLeave) {
        onLeave();
      }
    }

    render() {
      return (
        <WrappedComponent {...this.props} />
      );
    }
  }

  const mapStateToProps = (state) => ({
    isViewMode: isViewModeSelector(state),
  });
  return connect(mapStateToProps, actions)(Prompt);
};


PromptOnLeave.defaultProps = {
  promptWhen: () => true,
};

export default PromptOnLeave;
