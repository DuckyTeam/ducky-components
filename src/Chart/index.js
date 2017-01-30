import React from 'react';

class Chart extends React.Component {
  constructor() {
    super();
    this.margin = {
      top: 15,
      bottom: 40,
      left: 50,
      right: 8
    };
    this.container = null;
  }
  componentDidMount() {
    this.margin.left = this.props.milestones || this.props.goal ? 50 : 8;
    this.props.chart.create(this.container, {
      width: this.container.offsetWidth,
      height: this.container.offsetHeight,
      margin: this.margin,
      id: this.props.graphID
    }, this.getChartState());
  }

  componentDidUpdate() {
    this.margin.left = this.props.milestones || this.props.goal ? 50 : 8;
    this.props.chart.update(this.container, this.getChartState(), {
      width: this.container.offsetWidth,
      height: this.container.offsetHeight,
      margin: this.margin,
      id: this.props.graphID
    }, this.props.formatting);
  }

  componentWillUnmount() {
    this.props.chart.destroy(this.props.graphID);
  }

  handleRef = (element) => {
    this.container = element;
  }

  getChartState() {
    return Object.assign({}, this.props);
  }

  render() {
    return (
            <div
              className="Chart"
              id={`chartDiv${this.props.graphID}`}
              ref={this.handleRef}
              style={{height: this.props.height}}
              />
        );
  }
}

export default Chart;
