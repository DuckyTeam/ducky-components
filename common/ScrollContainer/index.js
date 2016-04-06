import React from 'react';
import ReactDOM from 'react-dom';
import {PropTypes} from 'react';
import styles from './styles.css';

class ScrollContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleRef = this.handleRef.bind(this);
    }
    componentDidUpdate(prevProps) {
        if (prevProps.children.length !== this.props.children.length) {
            if (this.props.scrollOnUpdate === 'bottom') {
                ReactDOM.findDOMNode(this.scrollContainer).scrollTop = 999999;
            }

            if (this.props.scrollOnUpdate === 'top') {
                ReactDOM.findDOMNode(this.scrollContainer).scrollTop = 0;
            }
        }
    }
    handleRef(component) {
        this.scrollContainer = component;
    }
    render() {
        return (
            <div
                className={styles.wrapper}
                ref={this.handleRef}
                style={{maxHeight: this.props.size}}
            >
                {this.props.children}
            </div>
        );
    }
}

ScrollContainer.propTypes = {
    children: PropTypes.node,
    scrollOnUpdate: PropTypes.oneOf(['bottom', 'top']),
    size: PropTypes.number
};

export default ScrollContainer;
