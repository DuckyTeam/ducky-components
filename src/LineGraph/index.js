import React from 'react';

import d3Chart from './graph';

class LineGraph extends React.Component {
    constructor() {
        super();
        this.margin = {top: 10, bottom: 50, left: 50, right: 20};
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

    componentWillUnmount() {}

    handleRef = (element) => {
        this.container = element;
    }

    getChartState() {
        return {
            data: this.props.data,
            member: this.props.member,
            selected: this.props.selected,
            startDate: this.props.startDate,
            endDate: this.props.endDate,
            goals: this.props.goals
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
            id: React.PropTypes.id
        })
    ),
    member: React.PropTypes.number,
    selected: React.PropTypes.number,
    goals: React.PropTypes.array,
    formatting: React.PropTypes.func,
    graphID: React.PropTypes.number,
    height: React.PropTypes.string
};

export default LineGraph;
