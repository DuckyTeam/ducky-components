import React from 'react';
import {PropTypes} from 'react';
import styles from './styles.css';
import classNames from 'classnames';

function ProgressBar(props) {
    return (
        <div
            className={classNames(styles.wrapper, {[props.className]: props.className})}
            onClick={props.onClick}
        >
            <div
                className={styles.progress}
                style={{width: `${props.percent}%`, backgroundColor: props.color}}
            ></div>
        </div>
    );
}

ProgressBar.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
    percent: PropTypes.number
};

export default ProgressBar;
