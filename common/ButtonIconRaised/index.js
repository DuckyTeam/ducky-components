import React from 'react';
import Icon from '../Icon';
import Typography from '../Typography';
import classNames from 'classnames';
import styles from './ButtonIconRaised.css';

function ButtonIconRaised(props) {
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
            <Icon
                className={classNames(styles.icon)}
                icon={props.icon}
                size={'small'}
            />
            <Typography
                className={classNames(styles.text)}
                type={'button'}
            >
                {props.children}
            </Typography>
        </button>
    );
}

ButtonIconRaised.propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    icon: React.PropTypes.string,
    onClick: React.PropTypes.func,
    theme: React.PropTypes.string
};

export default ButtonIconRaised;
