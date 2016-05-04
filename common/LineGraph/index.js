import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.css';

import d3Chart from './graph';

class LineGraph extends React.Component {
    componentDidMount() {
        var el = ReactDOM.findDOMNode(this);
        d3Chart.create(document.getElementById("chart"), {
            width: 400,
            height: 300
        }, this.getChartState());
    }

    componentDidUpdate() {
        var el = ReactDOM.findDOMNode(this);
        d3Chart.update(el, this.getChartState());
    }

    getChartState() {
        return {
            data: this.props.data,
            domain: this.props.domain
        };
    }

    componentWillUnmount() {
        var el = ReactDOM.findDOMNode(this);
        d3Chart.destroy(el);
    }

    render() {
        return (
            <div id="chart" className="Chart"></div>
        );
    }
}


export default LineGraph;