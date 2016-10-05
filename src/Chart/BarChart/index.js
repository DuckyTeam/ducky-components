import React from 'react';
import chart from './chart';
import Chart from './../index';

class BarChart extends React.Component {
  render() {
    return <Chart chart={chart} {...this.props} />
  }
}

BarChart.propTypes = {
  goals: React.PropTypes.arrayOf(React.PropTypes.number),
  graphID: React.PropTypes.number.isRequired,
  height: React.PropTypes.string.isRequired,
  memberOf: React.PropTypes.number,
  selectedId: React.PropTypes.number,
  onClick: React.PropTypes.func,
  isMobile: React.PropTypes.bool,
  data: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number,
    value: React.PropTypes.number,
    label: React.PropTypes.string
  }))
}

export default BarChart;
