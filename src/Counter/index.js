import React from 'react';
import styles from './styles.css';
import CountUp from 'countup.js';

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
        const easingFn = (t, b, c, d) => {
            const ts = (t /= d) * t;
            const tc = ts * t;

            return b + c * (tc * ts + -5 * ts * ts + 10 * tc + -10 * ts + 5 * t);
        };

        this.counter = new CountUp(this.wrapper, 0, 0, 0, 1, {
            useEasing: true,
            // easingFn: easingFn,
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
            <div className={styles.wrapper}>
                <span ref={this.handleRef}>{this.props.number}</span>
            </div>
        );
    }
}

Counter.propTypes = {
    number: React.PropTypes.number
};

export default Counter;
