import React from 'react';
import styles from './DashboardCard.module.scss';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid/lib';
import { DashboardCardContent } from './DashboardCardContent';
import { Text, LabelDivider, Card } from 'components';

function DashboardCard(props) {
  const { loading, topKPI, summaryKPI, KPIS, onClick, title, metricLabel } = props;

  /* eslint-disable */
  const displayKPIS = KPIS.map((kpi, index) =>
    <div key={index} className={styles.metric}>
      {kpi}
    </div>
  );

  let displaySummaryKPI;
  let metricsColsSize = 12;
  if (summaryKPI) {
    metricsColsSize = 8;
    displaySummaryKPI = (
      <Col xs={4}>
        <Row>
          <LabelDivider label={summaryKPI} />
        </Row>
      </Col>
    );
  }

  return (
    <div className={styles.dashboardBoarder}>
      <Card loading={loading} title={title} onClick={onClick}>
        <div className={styles.dashboardCard}>
          <Row top="xs" center="xs">
            {topKPI}
          </Row>
          <Row center="xs" middle="xs">
            <div className={styles.metricLabel}>
              <Text size="large1">
                {metricLabel}
              </Text>
            </div>
          </Row>
          <div className={styles.summaryKPI}>
            <Row middle="xs" center="xs">
              {displaySummaryKPI}
              <Col xs={metricsColsSize}>
                <Row center="xs" middle="xs">
                  {displayKPIS}
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </Card>
    </div>
  );
}

DashboardCard.propTypes = {
  loading: PropTypes.bool,
  topKPI: PropTypes.element,
  summaryKPI: PropTypes.element,
  KPIS: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  onClick: PropTypes.func,
  title: PropTypes.string,
  metricLabel: PropTypes.string
};

DashboardCard.DashboardCardContent = DashboardCardContent;

export default DashboardCard;
