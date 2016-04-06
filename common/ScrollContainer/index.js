import React from 'react';
import {PropTypes} from 'react';
import styles from './styles.css';

class ScrollContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidUpdate(prevProps) {
        if (prevProps.children.length !== this.props.children.length) {
            if (this.props.scrollOnUpdate === 'bottom') {
                this.refs.scrollContainer.scrollTop = 999999;
            }

            if (this.props.scrollOnUpdate === 'top') {
                this.refs.scrollContainer.scrollTop = 0;
            }
        }
    }
    render() {
        return (
            <div
                className={styles.wrapper}
                ref="scrollContainer"
                style={{maxHeight: this.props.size}}
            >
                {this.props.children}
            </div>
        );
    }
}

ScrollContainer.propTypes = {
    children: React.PropTypes.node,
    scrollOnUpdate: React.PropTypes.oneOf(['bottom', 'top']),
    size: React.PropTypes.number
};

export default ScrollContainer;
