import React from 'react';
import chart from './chart';
import Chart from './../index';

class LineChart extends React.Component {
  render() {
    return <Chart chart={chart} {...this.props} />
  }
}

LineChart.PropTypes = {
  goals: React.PropTypes.arrayOf(React.PropTypes.number),
  graphID: React.PropTypes.number.isRequired,
  height: React.PropTypes.string.isRequired,
  memberOf: React.PropTypes.any,
  selectedId: React.PropTypes.any,
  onClick: React.PropTypes.func,
  isMobile: React.PropTypes.bool,
  startDate: React.PropTypes.string,
  endDate: React.PropTypes.string,
  data: React.PropTypes.arrayOf(React.PropTypes.shape({
    label: React.PropTypes.string,
    id: React.PropTypes.any,
    data: React.PropTypes.arrayOf(React.PropTypes.shape({
      date: React.PropTypes.string,
      value: React.PropTypes.number
    }))
  }))
}

export default LineChart;
