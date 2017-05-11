import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import styles from './styles.css';
import classNames from 'classnames';

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
                className={classNames(styles.wrapper, {
                    [this.props.className]: this.props.className
                })}
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
    className: PropTypes.string,
    scrollOnUpdate: PropTypes.oneOf(['bottom', 'top']),
    size: PropTypes.number
};

export default ScrollContainer;
