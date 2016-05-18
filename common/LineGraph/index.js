import React from 'react';
import ReactDOM from 'react-dom';

import d3Chart from './graph';

class LineGraph extends React.Component {
    componentDidMount() {
        const el = ReactDOM.findDOMNode(this);

        d3Chart.create(el, {
            width: el.offsetWidth,
            height: el.offsetHeight,
            margin: this.margin,
            id: this.props.graphID
        }, this.getChartState(), this.props.formatting);
    }

    componentDidUpdate() {
        const el = ReactDOM.findDOMNode(this);

        d3Chart.update(el, this.getChartState(), {
            width: el.offsetWidth,
            height: el.offsetHeight,
            margin: this.margin,
            id: this.props.graphID
        }, this.props.formatting);
    }

    componentWillUnmount() {
        const el = ReactDOM.findDOMNode(this);

        d3Chart.destroy(el);
    }

    margin = {top: 10, bottom: 40, left: 30, right: 10};

    getChartState() {
        return {
            data: this.props.data,
            domain: this.props.domain
        };
    }

    render() {
        return (
            <div
                className="Chart"
                id="chart"
                style={{height: this.props.height}}
            >
            </div>
        );
    }
}

LineGraph.propTypes = {
    data: React.PropTypes.arrayOf(
        React.PropTypes.objectOf(

        )
    ),
    domain: React.PropTypes.objectOf(),
    formatting: React.PropTypes.func,
    graphID: React.PropTypes.number,
    height: React.PropTypes.string
};

export default LineGraph;
