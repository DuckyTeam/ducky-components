import React from 'react';
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
  data: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.any,
    value: React.PropTypes.number
  })),
  graphID: React.PropTypes.number.isRequired,
  height: React.PropTypes.string,
  maxWidthBar: React.PropTypes.number,
  memberOf: React.PropTypes.any,
  onClick: React.PropTypes.func,
  selectedId: React.PropTypes.any
};

export default BarChartMobile;
