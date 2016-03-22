import React from 'react';
import styles from './styles.css';

/* eslint-disable react/no-set-state */

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.onWindowClick = this.onWindowClick.bind(this);
        this.handleToggleClick = this.handleToggleClick.bind(this);
        this.handleOptionClick = this.handleOptionClick.bind(this);
        this.handleRef = this.handleRef.bind(this);
        this.state = {
            show: false
        };
    }

    onWindowClick(event) {
        let target = event.target;

        while (target) {
            if (target === this.options) {
                return;
            }
            target = target.parentNode;
        }
        this.setState({
            show: false
        });
        window.removeEventListener('click', this.onWindowClick);
    }

    handleToggleClick() {
        this.setState({
            show: !this.state.show
        }, () => {
            if (this.state.show) {
                setTimeout(() => {
                    window.addEventListener('click', this.onWindowClick);
                });
            }
        });
    }

    handleOptionClick() {
        this.setState({
            show: false
        });
    }

    handleRef(component) {
        this.options = component;
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <div
                    className={styles.label}
                    onClick={this.handleToggleClick}
                >
                    {this.props.label}
                </div>
                {this.state.show ? (
                    <ul
                        className={this.props.right ? styles.optionsRight : styles.options}
                        onClick={this.handleOptionClick}
                        ref={this.handleRef}
                    >
                        {this.props.children}
                    </ul>
                ) : null}
            </div>
        );
    }
}
Dropdown.propTypes = {
    children: React.PropTypes.node,
    label: React.PropTypes.node,
    right: React.PropTypes.bool
};

export default Dropdown;
