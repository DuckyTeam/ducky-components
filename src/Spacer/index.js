import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.css';


function Spacer(props) {
    if (props.hr) {
        return (
            <div className={classNames({
              [styles[props.size]]: props.size,
              [props.className]: props.className
            })}>
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
