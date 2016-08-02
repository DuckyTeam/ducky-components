import React from 'react';
import {PropTypes} from 'react';
import styles from './styles.css';
import classNames from 'classnames';

function Popup(props) {
    function handleWrapperClick(event) {
        event.stopPropagation();
    }
    return (
        <div
            className={classNames(styles.wrapper, props.className)}
            onClick={handleWrapperClick}
        >
            {props.children}
        </div>
    );
}

Popup.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export default Popup;
