import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { actions } from 'modules/autoComplete';
import { connect } from 'react-redux';

function AutoCompleteWrapper(WrappedComponent, column, key) {
  class AutoCompleteWrapperComponent extends Component {
    static propTypes = {
      loading: PropTypes.bool, // eslint-disable-line
      options: PropTypes.arrayOf(PropTypes.object), // eslint-disable-line
      initialize: PropTypes.func,
    };

    componentWillMount() {
      this.props.initialize(column, key);
    }

    render() {
      return <WrappedComponent {...this.props} column={column} uniqueKey={key} />;
    }
  }

  const mapStateToProps = (state) => {
    const autoCompleteColumn = state.autoComplete[column + key];
    return {
      loading: autoCompleteColumn ? autoCompleteColumn.loading : false,
      options: autoCompleteColumn ? autoCompleteColumn.options : [],
    };
  };

  return connect(mapStateToProps, actions)(AutoCompleteWrapperComponent);
}

export default AutoCompleteWrapper;
