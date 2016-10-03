import React from 'react';
import chart from './chart';
import Chart from './../index';

class BarChart extends React.Component {
  render() {
    return <Chart chart={chart} {...this.props} />
  }
}

export default BarChart;
