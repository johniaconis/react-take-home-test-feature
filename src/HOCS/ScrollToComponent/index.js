import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/* eslint react/no-find-dom-node: 0 */
/* eslint func-names: 0 */
function ScrollToComponent(fn) {
  return function (WrappedComponent) {
    return class ScrollTo extends Component {
      componentDidMount() {
        const node = ReactDOM.findDOMNode(this);
        node.scrollIntoView();
      }

      componentWillReceiveProps(nextProps) {
        if (fn(this.props, nextProps)) {
          const node = ReactDOM.findDOMNode(this);
          node.scrollIntoView();
        }
      }

      render() {
        return <WrappedComponent {...this.props} />;
      }
    };
  };
}

export default ScrollToComponent;
