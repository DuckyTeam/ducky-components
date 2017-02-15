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
  goal: React.PropTypes.number,
  graphID: React.PropTypes.number.isRequired,
  hasLeader: React.PropTypes.bool,
  height: React.PropTypes.string.isRequired,
  isGnome: React.PropTypes.bool,
  isMobile: React.PropTypes.bool,
  maxWidthBar: React.PropTypes.number,
  memberOf: React.PropTypes.any,
  milestones: React.PropTypes.arrayOf(React.PropTypes.number),
  onClick: React.PropTypes.func,
  onClickCO2: React.PropTypes.func,
  selectedId: React.PropTypes.any
};

export default BarChart;
