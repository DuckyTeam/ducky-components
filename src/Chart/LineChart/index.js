import React from 'react';
import PropTypes from 'prop-types';
import chart from './chart';
import Chart from './../index';

function LineChart(props) {
  return <Chart chart={chart} {...props} />;
}

LineChart.PropTypes = {
  goals: PropTypes.arrayOf(PropTypes.number),
  graphID: PropTypes.number.isRequired,
  height: PropTypes.string.isRequired,
  memberOf: PropTypes.any,
  selectedId: PropTypes.any,
  onClick: PropTypes.func,
  onCo2Click: PropTypes.func,
  isMobile: PropTypes.bool,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    id: PropTypes.any,
    data: PropTypes.arrayOf(PropTypes.shape({
      date: PropTypes.string,
      value: PropTypes.number
    }))
  }))
};

export default LineChart;
