import React from 'react';
import styles from './ListNumbered.module.scss';
import { Row, Col } from 'react-flexbox-grid/lib';
import PropTypes from 'prop-types';
import { Text, Icon } from 'components';

function enumerator(enumerateDisplay, value, withTitle) {
  const label = (<Text weight="med1">{value.toString()}</Text>);
  if (enumerateDisplay) {
    if (withTitle) {
      return (<Col xs={2}>
        <div className={`${styles.withTitle}`} >
          {label}
        </div>
      </Col>);
    }
    return (<Col xs={2}>
      <div className={`${styles.enumeration}`}>
        {label}
      </div>
    </Col>);
  }
  return undefined;
}

function ListNumbered(props) {
  const { title, iconType, children, enumerate } = props;
  let withTitle = false;
  let enumerateDisplay = enumerate;
  if (enumerate === undefined) {
    enumerateDisplay = true;
  }

  if (title) {
    withTitle = true;
  }

  let childrenDisplay = children.map((child, idx) => {
    const index = idx + 1;
    return (<div key={index}>
      <Row start="xs" middle="xs">
        <Col>
          {enumerator(enumerateDisplay, index, withTitle)}
        </Col>
        <Col xs={10}>
          <div className={styles.listItem}>
            {child}
          </div>
        </Col>
      </Row>
    </div>);
  });

  // wrap list with a title
  let titleDisplay;
  if (title) {
    titleDisplay = (<Text size="med1">{title}</Text>);
    if (iconType) {
      const icon = (<Icon iconType={iconType} size="small" />);
      titleDisplay = (<div className={styles.titlePadding}>{icon}{titleDisplay}</div>);
    }
  }

  childrenDisplay = (
    <Row start="xs" middle="xs">
      <Col xs={12}>
        <Row>
          <Col xs={12}>{titleDisplay}
          </Col>
        </Row>
        <Row>
          <Col xs={12}>{childrenDisplay}
          </Col>
        </Row>
      </Col>
    </Row>
    );

  return (<div className={styles.listCard}>
    {childrenDisplay}
  </div>);
}

ListNumbered.propTypes = {
  title: PropTypes.string,
  iconType: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  enumerate: PropTypes.bool,
};

export default ListNumbered;
