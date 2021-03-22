import React from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import { Row } from 'react-flexbox-grid/lib';
import styles from './Loading.module.scss';
import { CurryComponent } from 'HOCS';

export function LoadingComponent(props) {
  const { size, loading, className, level } = props;
  // While we use antd spinner
  let displayClass;
  let antdSize;
  if (size.startsWith('small')) {
    antdSize = 'small';
  } else if (size.startsWith('large')) {
    antdSize = 'large';
  } else {
    antdSize = 'default';
  }
  if (level === 'page') {
    displayClass = styles.pageLevel;
  }

  if (loading) {
    return (
      <Row center="xs" middle="xs" className={`${displayClass} ${className}`}>
        <Spin size={antdSize} />
      </Row>
    );
  }
}

LoadingComponent.propTypes = {
  loading: PropTypes.bool,
  size: PropTypes.string,
  className: PropTypes.string,
  level: PropTypes.string,
};

const Loading = CurryComponent(LoadingComponent, { level: 'page' });

Loading.propTypes = {
  loading: PropTypes.bool,
  size: PropTypes.string,
  className: PropTypes.string,
};

Loading.defaultProps = {
  size: 'med1',
};

export default Loading;
