import React from 'react';
import Typography from '../Typography';
import classNames from 'classnames';
import styles from './styles.css';

function ButtonRaised(props) {
    let disabled = false;

    if (props.disabled) {
        disabled = 'disabled';
    }

    return (
        <button
            className={classNames(styles.raised, {
                [styles.darkBackground]: props.theme === 'dark',
                [props.className]: props.className
            })}
            disabled={disabled}
            onClick={props.onClick}
        >
            <Typography
                className={classNames(styles.text, {
                    [styles.darkText]: props.theme === 'dark'
                })}
            >
                {props.children}
            </Typography>
        </button>
    );
}

ButtonRaised.propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    onClick: React.PropTypes.func,
    theme: React.PropTypes.string
};

export default ButtonRaised;
