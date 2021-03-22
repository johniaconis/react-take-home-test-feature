import React from 'react';
import styles from './ListCard.module.scss';
import { Row, Col } from 'react-flexbox-grid/lib';
import PropTypes from 'prop-types';
import { Text, GenericCard } from 'components';

function enumerater(enumerateDisplay, value) {
  const label = <Text size="med2">{value.toString()}</Text>;
  if (enumerateDisplay) {
    return (
      <Col xs={2}>
        <div className={styles.enumeration}>{label}</div>
      </Col>
    );
  }
  return undefined;
}

function ListCard(props) {
  const { enumerate, children, onItemClick, id } = props;
  let enumerateDisplay = enumerate;
  if (enumerate === undefined) {
    enumerateDisplay = true;
  }

  let childrenDisplay;
  if (children) {
    childrenDisplay = children.map((child, idx) => {
      const index = idx + 1;
      return (
        <div
          id={id}
          key={index}
          className={onItemClick ? `${styles.rowBase} ${styles.clickableRow}` : styles.rowBase}
          onClick={onItemClick ? () => onItemClick(child) : () => {}}
        >
          <Row start="xs" middle="xs">
            <Col>{enumerater(enumerateDisplay, index)}</Col>
            <Col xs={10}>
              <div className={styles.listItem}>{child}</div>
            </Col>
          </Row>
        </div>
      );
    });
  }

  return (
    <GenericCard {...props} bodyClassName={styles.listBody}>
      <div className={styles.listCard}>{childrenDisplay}</div>
    </GenericCard>
  );
}

ListCard.propTypes = {
  id: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  enumerate: PropTypes.bool,
  onItemClick: PropTypes.func,
};

export default ListCard;
