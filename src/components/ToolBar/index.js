import React from 'react';
import PropTypes from 'prop-types';
import styles from './ToolBar.module.scss';
import { Row, Col } from 'react-flexbox-grid';

function ToolBar(props) {
  const { components, className, rightComponent } = props;

  // eslint-disable */
  const toolBarComponents = components
    ? components.map((comp, idx) => {
      const componentHash = `component_${idx}`;
      return (
        <div className={styles.toolbarComponentWrapper} key={componentHash}>
          {comp}
        </div>
      );
    })
    : [];

  if (rightComponent) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.topBreak} />
        <div className={`${styles.toolBar} ${className}`}>
          <Row>
            <Col xs={8}>
              <Row>
                {toolBarComponents}
              </Row>
            </Col>
            <Col xs={4}>
              <Row end="xs">
                <div className={styles.rightComponent}>
                  {rightComponent}
                </div>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.topBreak} />
      <div className={`${styles.toolBar} ${className}`}>
        <Row>
          {toolBarComponents}
        </Row>
      </div>
    </div>
  );
}

ToolBar.propTypes = {
  components: PropTypes.array.isRequired,
  className: PropTypes.string,
  rightComponent: PropTypes.node,
};

export default ToolBar;
