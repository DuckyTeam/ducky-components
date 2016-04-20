import React from 'react';
import Typography from '../Typography';
import classNames from 'classnames';
import styles from './ButtonCounter.css';
const PropTypes = React.PropTypes;
const MAX_NUM_STANDARD = 999;
const MAX_NUM_SMALL = 99;

function ButtonCounter(props) {
    let counter = props.number;

    if (props.size === 'small') {
        if (counter > MAX_NUM_SMALL) {
            counter = '99+';
        }
    }
    if (counter > MAX_NUM_STANDARD) {
        counter = '999+';
    }

    return (
        <span
            className={classNames(styles.wrapper, {
                [styles[props.size]]: props.size,
                [props.className]: props.className
            })}
            onClick={props.onClick}
            style={props.style}
        >
            <Typography
                className={styles.number}
                type={'caption2Normal'}
            >
                {counter}
            </Typography>
        </span>
    );
}

ButtonCounter.propTypes = {
    className: PropTypes.string,
    number: PropTypes.number,
    onClick: PropTypes.func,
    size: React.PropTypes.oneOf(['small', 'standard']),
    style: React.PropTypes.objectOf(React.PropTypes.oneOfType(
        [React.PropTypes.number, React.PropTypes.string]
    ))
};

export default ButtonCounter;
