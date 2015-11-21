import React from 'react';
import styles from './styles.css';

function Button(props) {
    let buttonType = styles.primary;

    if (props.type) {
        console.log('hey');
        buttonType = styles[props.type];
    }

    return (
        <button className={buttonType} onClick={props.onClick}>
            {props.children}
        </button>
    );
}

Button.propTypes = {
    children: React.PropTypes.any,
    onClick: React.PropTypes.func,
    type: React.PropTypes.string
};

export default Button;
