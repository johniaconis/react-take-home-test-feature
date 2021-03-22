import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Popover } from 'antd';
import styles from './PopoverText.module.scss';

class PopoverText extends Component {
  static propTypes = {
    children: PropTypes.object,
    title: PropTypes.string,
    titleStyle: PropTypes.string,
    id: PropTypes.string,
  };

  state = {
    visible: false,
  };

  hide = () => {
    this.setState({
      visible: false,
    });
  };

  handleVisibleChange = (visible) => {
    this.setState({ visible });
  };

  render() {
    const { children, title, titleStyle, id } = this.props;
    return (
      <div id={id} className={styles.popoverBlock}>
        <Popover
          id={id}
          placement="right"
          content={children}
          title={title}
          trigger="click"
          visible={this.state.visible}
          onVisibleChange={this.handleVisibleChange}
        >
          <span className={titleStyle}>{title}</span>
        </Popover>
      </div>
    );
  }
}

export default PopoverText;
