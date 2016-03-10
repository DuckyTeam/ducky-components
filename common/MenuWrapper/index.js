import React from 'react';
import styles from './MenuWrapper.css';
const PropTypes = React.PropTypes;

function MenuWrapper(props) {
    return (
        <div clasName={styles.wrapper} >
            {props.children}
        </div>
    );
}

MenuWrapper.propTypes = {
    children: PropTypes.node
};

export default MenuWrapper;
