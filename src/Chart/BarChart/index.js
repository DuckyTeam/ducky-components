import React from 'react';
import chart from './chart';
import Chart from './../index';

function BarChart(props) {
  return (
    <Chart
      chart={chart}
      {...props}
      />
  );
}

BarChart.propTypes = {
  data: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.any,
    value: React.PropTypes.number,
    label: React.PropTypes.string
  })),
  goals: React.PropTypes.arrayOf(React.PropTypes.number),
  graphID: React.PropTypes.number.isRequired,
  height: React.PropTypes.string.isRequired,
  isMobile: React.PropTypes.bool,
  memberOf: React.PropTypes.any,
  onClick: React.PropTypes.func,
  selectedId: React.PropTypes.any
};

export default BarChart;
