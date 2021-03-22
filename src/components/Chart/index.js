import React from 'react';
import Highcharts from 'highcharts';
import Exports from 'highcharts/modules/exporting';
import styles from './Chart.module.scss';
import PropTypes from 'prop-types';

Exports(Highcharts);

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.chart = undefined;
  }
  componentDidMount() {
    const { config } = this.props;
    this.chart = Highcharts.chart(this.dingart, config);
  }

  render() {
    return (<div
      className={styles.chartWrapper} ref={(dingart) => { this.dingart = dingart; }}
      style={{ width: '100%', height: '100%' }}
    />);
  }
}

Chart.propTypes = {
  config: PropTypes.object,
};

export default Chart;
