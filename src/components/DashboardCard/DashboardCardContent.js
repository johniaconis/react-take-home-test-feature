import React from 'react';
import styles from './DashboardCard.module.scss';
import { Row } from 'react-flexbox-grid/lib';
import PropTypes from 'prop-types';
import { HeaderText } from 'components';

export function DashboardCardContent(props) {
  const { topKPI, children, metricLabel } = props;

  return (
    <div>
      <Row top="xs" center="xs">
        {topKPI}
      </Row>
      <Row center="xs" middle="xs">
        <div className={styles.metricLabel}>
          <HeaderText size={3}>
            {metricLabel}
          </HeaderText>
        </div>
      </Row>
      <div className={styles.summaryKPI}>
        <Row middle="xs" center="xs">
          {children}
        </Row>
      </div>
    </div>
  );
}

DashboardCardContent.propTypes = {
  topKPI: PropTypes.element,
  children: PropTypes.element,
  metricLabel: PropTypes.string,
};
