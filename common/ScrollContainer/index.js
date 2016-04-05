import React from 'react';
import styles from './styles.css';

function ScrollContainer(props) {
    return (
        <div className={styles.wrapper} style={{maxHeight: props.size}}>
            {props.children}
        </div>
    );
}

ScrollContainer.propTypes = {
    children: React.PropTypes.any,
    size: React.PropTypes.number
};

export default ScrollContainer;
