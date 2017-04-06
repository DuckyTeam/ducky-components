import React from 'react';
import {PropTypes} from 'react';
import styles from './styles.css';
import classNames from 'classnames';

function ProgressCircle(props) {
    // radius as per spec - 48
    let circumference = 2 * Math.PI * 48;

    if (props.big) {
      circumference = 2 * Math.PI * 86;
    }

    const arc = circumference * (100 - props.percent) / 100;
    // color for POINTS and default
    let color = '#8bc34a';

    if (props.type.toUpperCase() === 'CO2') {
        color = '#00ab97';
    } else if (props.type.toUpperCase() === 'ACTIVITY') {
        color = '#0099a9';
    } else if (props.type.toUpperCase() === 'HABIT') {
        color = '#35b8c4';
    }

    return (
        <div
            className={classNames(styles.wrapper, {[props.className]: props.className})}
        >
            <svg className={classNames(styles.svg, {[styles.svgBig]: props.big})}>
                <circle className={classNames(styles.circleBase, {[styles.circleBaseBig]: props.big})} />
                <circle className={classNames(styles.circleProgress, {[styles.circleProgressBig]: props.big})}
                    stroke={color}
                    strokeDasharray={circumference}
                    strokeDashoffset={arc}
                    transform={props.big ? 'rotate(-90, 90, 90)' : 'rotate(-90, 50, 50)'}
                />
            </svg>
        </div>
    );
}

ProgressCircle.propTypes = {
    big: PropTypes.bool,
    className: PropTypes.string,
    percent: PropTypes.number,
    type: PropTypes.oneOf(['co2', 'activity', 'habit', 'points'])
};

export default ProgressCircle;
