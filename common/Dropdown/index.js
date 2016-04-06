import React from 'react';
import styles from './styles.css';
import classnames from 'classnames';

function Dropdown(props) {
    return (
        <div className={classnames(styles.wrapper, props.className)}>
            {props.children}
        </div>
    );
}

const PropTypes = React.PropTypes;
Dropdown.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export default Dropdown;
