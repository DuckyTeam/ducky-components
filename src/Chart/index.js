import React from 'react';

class Chart extends React.Component {
    constructor() {
        super();
        this.margin = {top: 15, bottom: 50, left: 50, right: 20};
        this.container = null;
    }
    componentDidMount() {
        this.props.chart.create(this.container, {
            width: this.container.offsetWidth,
            height: this.container.offsetHeight,
            margin: this.margin,
            id: this.props.graphID
        }, this.getChartState());
    }

    componentDidUpdate() {
        this.props.chart.update(this.container, this.getChartState(), {
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

export default Chart;
