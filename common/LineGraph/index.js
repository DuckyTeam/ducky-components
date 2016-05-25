import React from 'react';

import d3Chart from './graph';

class LineGraph extends React.Component {
    constructor() {
        super();
        this.margin = {top: 10, bottom: 40, left: 30, right: 30};
        this.container = null;
    }
    componentDidMount() {
        d3Chart.create(this.container, {
            width: this.container.offsetWidth,
            height: this.container.offsetHeight,
            margin: this.margin,
            id: this.props.graphID
        }, this.getChartState(), this.props.formatting);
    }

    componentDidUpdate() {
        d3Chart.update(this.container, this.getChartState(), {
            width: this.container.offsetWidth,
            height: this.container.offsetHeight,
            margin: this.margin,
            id: this.props.graphID
        }, this.props.formatting);
    }

    componentWillUnmount() {
        d3Chart.destroy(this.container);
    }

    handleRef = (element) => {
        this.container = element;
    }

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
                ref={this.handleRef}
                style={{height: this.props.height}}
            >
            </div>
        );
    }
}

LineGraph.propTypes = {
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

export default LineGraph;
