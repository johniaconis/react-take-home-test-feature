import React from 'react';
import PropTypes from 'prop-types';
import styles from './HeaderBar.module.scss';
import { PageTitleText } from 'components';
import { Row, Col } from 'react-flexbox-grid/lib';

// Pass titleString or titleComponent
function HeaderBar(props) {
  const {
    titleString,
    titleComponent,
    leftComponentList,
    rightComponentList,
    spacingFirst,
    spacingSecond,
    className,
    disableTopBreak,
    headerHeight = 50,
  } = props;

  const marginTop = -1 * headerHeight;
  const title =
    titleComponent ||
    <PageTitleText size="med2">
      {titleString}
    </PageTitleText>;
  const spacingFirstColumn = spacingFirst || 4;
  const spacingSecondColumn = spacingSecond || 8;

  let topBreak;
  if (!disableTopBreak) {
    topBreak = <div className={styles.topBreak} />;
  }
  // const transformedLeftList = leftComponentList.length?
  // leftComponentList.map((comp, idx) => {

  // }):[]
  return (
    <div style={{ height: headerHeight }}>
      {topBreak}
      <div
        style={{ marginTop: marginTop - 1, height: headerHeight }}
        className={`${className} ${styles.header}`}
      >
        <Row style={{ height: '100%' }} middle={'xs'}>
          <Col xs={spacingFirstColumn}>
            <Row start="xs">
              <div className={`${styles.horizontalList} ${styles.leftList}`}>
                {title}
                {leftComponentList}
              </div>
            </Row>
          </Col>
          <Col xs={spacingSecondColumn}>
            <Row end="xs">
              <div className={`${styles.horizontalList} ${styles.rightList}`}>
                {rightComponentList}
              </div>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}

HeaderBar.propTypes = {
  titleString: PropTypes.string,
  titleComponent: PropTypes.object,
  leftComponentList: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  rightComponentList: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  spacingFirst: PropTypes.number,
  spacingSecond: PropTypes.number,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  disableTopBreak: PropTypes.bool,
  headerHeight: PropTypes.number,
};

export default HeaderBar;
