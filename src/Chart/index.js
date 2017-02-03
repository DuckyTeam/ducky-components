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
        this.props.chart.create(this.container, Object.assign(this.getChartState(), {
          data: this.props.data
        }), {
            width: this.container.offsetWidth,
            height: this.container.offsetHeight,
            margin: this.margin,
            id: this.props.graphID
        });
        this.initialUpdate = setTimeout(() => {
          this.props.chart.update(this.container, this.getChartState(), {
            width: this.container.offsetWidth,
            height: this.container.offsetHeight,
            margin: this.margin,
            id: this.props.graphID
          }, true);
        }, 100);
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

  handleRef = (element) => {
    this.container = element;
  }

  componentWillUnmount() {
      clearTimeout(this.initialUpdate);
      this.props.chart.destroy(this.props.graphID);
  }

  getChartState() {
    return Object.assign({}, this.props);
  }

  render() {
    return (
      <div
          className="Chart"
          id={`chartDiv${this.props.graphID}`}
          ref={(node) => { this.container = node }}
          style={{height: this.props.height}}
          >
      </div>
    );
  }
}

export default Chart;
