import React from 'react';
import {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import styles from './styles.css';
import {createGraph} from "./pieChart";
import {updateGraph} from "./pieChart";
const WIDTH_FACTOR = 0.6666666666666666;

class PieChart extends React.Component {
    constructor(props) {
        super(props);
        this.dispatcher = null;
    }

    componentDidMount() {
        this.dispatcher = createGraph(ReactDOM.findDOMNode(this), {
            calwidth: this.props.calwidth * WIDTH_FACTOR,
            calheight: this.props.calheight,
            data: this.props.data.stats,
            total: this.props.data.total
        });
    }

    componentDidUpdate() {
        this.dispatcher = updateGraph(ReactDOM.findDOMNode(this), {
            calwidth: this.props.calwidth * WIDTH_FACTOR,
            calheight: this.props.calheight,
            data: this.props.data.stats,
            total: this.props.data.total
        });
    }

    render() {
        return (
            <div className={classNames(styles.wrapper, {
                [this.props.className]: this.props.className
            })}
            >
                <div className="pieChart"></div>
            </div>
        );
    }
}

PieChart.propTypes = {
    calheight: PropTypes.number,
    calwidth: PropTypes.number,
    className: PropTypes.string,
    data: PropTypes.shape({
        stats: PropTypes.arrayOf(PropTypes.shape({
            color: PropTypes.string,
            label: PropTypes.string,
            percentage: PropTypes.number
        })),
        title: PropTypes.string,
        total: PropTypes.number
    }),
    id: PropTypes.string.isRequired
};

export default PieChart;
