import Typography from '../Typography';
import IconImage from '../IconImage';
import ProgressCircle from '../ProgressCircle';
import LabelSmall from '../LabelSmall';
import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';

function GoalProgressBarGeneral(props) {
    let opt = (
        <Typography
            className={styles.typo}
            type={'header1'}
        >
            {props.percentage}{" %"}
        </Typography>
    );
    let labelIcon = 'icon-assignment_turned_in';

    if (props.type.toUpperCase() === 'ACTIVITY') {
        labelIcon = 'icon-check_circle';
    } else if (props.type.toUpperCase() === 'CO2') {
        labelIcon = 'icon-leaf';
    } else if (props.type.toUpperCase() === 'POINTS') {
        labelIcon = 'icon-brightness_high';
    }


    if (props.type.toUpperCase() === 'HABIT' || props.type.toUpperCase() === 'ACTIVITY') {
        opt = (
            <IconImage
                className={styles.innerElement}
                icon={props.icon}
                size={"large"}
            />
        );
    }
    return (
        <div
            className={classNames(styles.wrapper, {
                [props.className]: props.className
            })}
        >
            <div>
                <ProgressCircle
                    percent={props.percentage}
                    type={props.type}
                />
              {opt}
            </div>
            <div className={styles.innerWrapper}>
                <LabelSmall
                    className={classNames(styles.labelSmall,
                        {[styles.pointsIcon]: labelIcon === 'icon-brightness_high'},
                        {[styles.co2Icon]: labelIcon === 'icon-leaf'},
                        {[styles.activityIcon]: labelIcon === 'icon-check_circle'},
                        {[styles.habitIcon]: labelIcon === 'icon-assignment_turned_in'},
                    )}
                    content={props.content}
                    icon={labelIcon}
                    onClick={props.handleButtonClick}
                    type={"caption2Normal"}
                />
            </div>
        </div>
    );
}

GoalProgressBarGeneral.propTypes = {
    className: React.PropTypes.string,
    content: React.PropTypes.string,
    handleButtonClick: React.PropTypes.func,
    icon: React.PropTypes.string,
    percentage: React.PropTypes.number,
    type: React.PropTypes.string
};

export default GoalProgressBarGeneral;
