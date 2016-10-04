import React from 'react';

import barChart from './BarChart/chart';
import lineChart from './LineChart/chart';

const charts = {
  bar: barChart,
  line: lineChart
}

class Chart extends React.Component {
    constructor() {
        super();
        this.margin = {top: 10, bottom: 50, left: 50, right: 20};
        this.container = null;
    }
    componentDidMount() {
        this.chart = charts[this.props.type]
        this.chart.create(this.container, {
            width: this.container.offsetWidth,
            height: this.container.offsetHeight,
            margin: this.margin,
            id: this.props.graphID
        }, this.getChartState());
    }

    componentDidUpdate() {
        this.chart.update(this.container, this.getChartState(), {
            width: this.container.offsetWidth,
            height: this.container.offsetHeight,
            margin: this.margin,
            id: this.props.graphID
        }, this.props.formatting);
    }

    componentWillUnmount() {
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
                id="chart"
                ref={this.handleRef}
                style={{height: this.props.height}}
            >
            </div>
        );
    }
}

Chart.propTypes = {
    data: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            data: React.PropTypes.arrayOf(
                React.PropTypes.shape({
                    date: React.PropTypes.oneOfType(
                        [React.PropTypes.string, React.PropTypes.shape({})]
                    ),
                    value: React.PropTypes.number
                })
            ),
            label: React.PropTypes.string,
            strokeColor: React.PropTypes.string,
            strokeWidth: React.PropTypes.number
        })
    ),
    domain: React.PropTypes.shape({
        xDomain: React.PropTypes.arrayOf(React.PropTypes.oneOfType(
            [React.PropTypes.string, React.PropTypes.shape({})]
        )),
        yDomain: React.PropTypes.arrayOf(React.PropTypes.number)
    }),
    formatting: React.PropTypes.func,
    graphID: React.PropTypes.number,
    height: React.PropTypes.string
};

export default Chart;
