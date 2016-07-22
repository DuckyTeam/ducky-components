import React from 'react';
import classNames from 'classnames';
import styles from './Spacer.css';
const PropTypes = React.PropTypes;

function Spacer(props) {
    if (props.hr) {
        return (
            <div className={classNames({[styles[props.size]]: props.size})}>
                <div className={styles.hr}></div>
            </div>
        );
    }

    return (
        <div
            className={classNames(styles.wrapper, {
                [styles[props.size]]: props.size,
                [props.className]: props.className
            })}
        >
        </div>
    );
}

Spacer.propTypes = {
    className: PropTypes.string,
    hr: PropTypes.bool,
    size: PropTypes.oneOf(['standard', 'double', 'large', 'fat', 'hr1', 'hr2', 'hr3'])
};

export default Spacer;
