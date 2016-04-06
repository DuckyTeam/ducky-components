import React from 'react';
import {PropTypes} from 'react';
import styles from './styles.css';

function ScrollContainer(props) {
    return (
        <div
            className={styles.wrapper}
            style={{maxHeight: props.size}}
        >
            {props.children}
        </div>
    );
}

ScrollContainer.propTypes = {
    children: PropTypes.node,
    size: PropTypes.number
};

export default ScrollContainer;
