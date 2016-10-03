import React from 'react';
import chart from './chart';
import Chart from './../index';

class LineChart extends React.Component {
  render() {
    return <Chart chart={chart} {...this.props} />
  }
}

export default LineChart;
