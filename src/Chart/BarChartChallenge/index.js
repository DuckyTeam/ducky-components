import React from 'react';
import PropTypes from 'prop-types';
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
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.any,
    value: PropTypes.number,
    label: PropTypes.string
  })),
  goal: PropTypes.number,
  graphID: PropTypes.number.isRequired,
  hasLeader: PropTypes.bool,
  height: PropTypes.string.isRequired,
  isGnome: PropTypes.bool,
  isMobile: PropTypes.bool,
  maxWidthBar: PropTypes.number,
  memberOf: PropTypes.any,
  milestones: PropTypes.arrayOf(PropTypes.number),
  onClick: PropTypes.func,
  onClickCO2: PropTypes.func,
  selectedId: PropTypes.any
};

export default BarChart;
