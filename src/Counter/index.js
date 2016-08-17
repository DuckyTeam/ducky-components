import React from 'react';
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
        this.counter = new CountUp(this.wrapper, 0, 0, 0, 1, {
            useEasing: true,
            useGrouping: true,
            separator: ' ',
            decimal: '.',
            prefix: '',
            suffix: ''
        });
        this.counter.start(() => {
            this.counter.update(this.props.number);
        });
    }
    componentDidUpdate(prevProps) {
        if (prevProps.number !== this.props.number) {
            self.counter.update(this.props.number);
        }
    }
    handleRef(container) {
        this.wrapper = container;
    }
    render() {
        return (
            <div
                className={classNames(styles.wrapper, {
                    [this.props.className]: this.props.className
                })}
                ref={this.handleRef}
            >
            </div>
        );
    }
}

Counter.propTypes = {
    className: React.PropTypes.string,
    number: React.PropTypes.number
};

export default Counter;
