import React from 'react';
import PropTypes from 'prop-types';
import { Tabs as AntTabs } from 'antd';

function Tabs(props) {
  const { children, ...newProps } = props;

  return (
    <AntTabs {...newProps}>
      {children}
    </AntTabs>
  );
}

Tabs.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  tabPosition: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
  activeKey: PropTypes.string,
  defaultActiveKey: PropTypes.string,
  onChange: PropTypes.func,
};

Tabs.defaultProps = {
  tabPosition: 'left',
};

export default Tabs;
