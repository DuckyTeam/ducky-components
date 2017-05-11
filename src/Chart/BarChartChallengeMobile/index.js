import React from 'react';
import PropTypes from 'prop-types';
import chart from './chart';
import Chart from './../index';

function BarChartMobile(props) {
  return (
    <Chart
      chart={chart}
      height={"80px"}
      {...props}
      />
  );
}

BarChartMobile.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.any,
    value: PropTypes.number
  })),
  graphID: PropTypes.number.isRequired,
  height: PropTypes.string,
  maxWidthBar: PropTypes.number,
  memberOf: PropTypes.any,
  onClick: PropTypes.func,
  selectedId: PropTypes.any
};

export default BarChartMobile;
