import React from 'react';
import {PropTypes} from 'react';
import styles from './styles.css';
import classNames from 'classnames';

function ProgressBarVertical(props) {
    // color for POINTS and default
    let color = '#8BC34A';

    if (props.type && props.type.toUpperCase() === 'CO2') {
        color = '#1cbaa5';
    }

    return (
        <div
            className={classNames(styles.wrapper, {
                [styles.inactiveWrapper]: [props.inactive],
                [props.className]: props.className})}
        >
            <div
                className={styles.progress}
                style={{height: `${props.percent}%`, backgroundColor: color}}
            />
        </div>
    );
}

ProgressBarVertical.propTypes = {
    className: PropTypes.string,
    inactive: PropTypes.bool,
    percent: PropTypes.number,
    type: PropTypes.strings
};

export default ProgressBarVertical;
