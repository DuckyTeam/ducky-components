import React from 'react';
import Typography from '../Typography';
import styles from './styles.css';

function Button(props) {
    let buttonType = styles.flat;
    let disabled = false;

    if (props.type) {
        buttonType = styles[props.type];
    }

    if (props.disabled) {
        disabled = 'disabled';
    }

    return (
        <button
            className={buttonType}
            disabled={disabled}
            onClick={props.onClick}
        >
            <Typography
                type={'buttonText'}
            >
                {props.children}
            </Typography>
        </button>
    );
}

Button.propTypes = {
    children: React.PropTypes.node,
    disabled: React.PropTypes.string,
    onClick: React.PropTypes.func,
    type: React.PropTypes.string
};

export default Button;
