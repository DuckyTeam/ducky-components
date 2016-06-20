import React from 'react';
import {PropTypes} from 'react';
import classNames from 'classnames';
import styles from './styles.css';
import {createGraph} from "./pieChart";
import {updateGraph} from "./pieChart";

class PieChart extends React.Component {
    constructor(props) {
        super(props);
        this.dispatcher = null;
        this.container = null;
    }
    componentDidMount() {
        this.dispatcher = createGraph(this.container, {
            calwidth: this.props.calwidth,
            calheight: this.props.calheight,
            data: this.props.data.stats,
            total: this.props.data.total
        });
    }
    componentDidUpdate() {
        this.dispatcher = updateGraph(this.container, {
            calwidth: this.props.calwidth,
            calheight: this.props.calheight,
            data: this.props.data.stats,
            total: this.props.data.total
        });
    }
    handleRef = (component) => {
        this.container = component;
    }
    render() {
        return (
            <div className={classNames(styles.wrapper, {
                [this.props.className]: this.props.className
            })}
            >
                <div ref={this.handleRef}></div>
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
        total: PropTypes.string
    }),
    id: PropTypes.string.isRequired
};

export default PieChart;
