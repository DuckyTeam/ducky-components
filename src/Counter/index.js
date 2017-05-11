import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';
import CountUp from 'countup.js';
import classNames from 'classnames';

class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            endNumber: 0,
            startNumber: 0
        };
        this.handleRef = this.handleRef.bind(this);
    }
    componentDidMount() {
        const decimals = this.props.decimals || 0;

        this.counter = new CountUp(this.wrapper, this.props.number, 0, decimals, 1, {
            useEasing: true,
            useGrouping: true,
            separator: ' ',
            decimal: '.',
            prefix: '',
            suffix: ''
        });
    }
    componentDidUpdate(prevProps) {
        if (this.props.noAnimation) {
          this.counter.startVal = this.props.number;
          this.counter.endVal = this.props.number;
          this.counter.start();
        } else if (prevProps.number !== this.props.number) {
            this.counter.update(this.props.number);
        }
    }
    handleRef(container) {
        this.wrapper = container;
    }
    render() {
        return (
            <span
                className={classNames(styles.wrapper, {
                    [this.props.className]: this.props.className
                })}
                ref={this.handleRef}
            >
            </span>
        );
    }
}

Counter.propTypes = {
    className: PropTypes.string,
    decimals: PropTypes.number,
    noAnimation: PropTypes.bool,
    number: PropTypes.number
};

export default Counter;
