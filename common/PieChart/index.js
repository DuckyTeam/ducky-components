import React from 'react';
import ReactDOM from 'react-dom';
import d3Chart from './graph';
import styles from './styles.css';

class PieChart extends React.Component {
    componentDidMount() {
        var el = ReactDOM.findDOMNode(this);
        d3Chart.create(el, {
            width: el.offsetWidth,
            height: el.offsetHeight
        }, this.getChartState());
    }

    componentDidUpdate() {
        var el = ReactDOM.findDOMNode(this);
        d3Chart.update(el, this.getChartState(), {
            width: el.offsetWidth,
            height: el.offsetHeight
        });
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
    render () {
        return (
            <div id={"pieChart"}></div>
        );
    }
}

export default PieChart;