import Icon from '../Icon';
import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../Typography';
import classNames from 'classnames';
import styles from './styles.css';


function ProfilePageMeta(props) {
    let icon = 'icon-leaf';
    let iconTitle = props.savingsText;
    let totalComparisonComp = '';
    const totalUserValue = props.totalUserValue ? (props.totalUserValue).toLocaleString() : 0;
    const totalComparisonValue = props.totalComparisonValue ? (props.totalComparisonValue).toLocaleString() : 0;

    if (props.type === 'points') {
        icon = 'icon-brightness_high';
        iconTitle = props.pointsText;
    } else if (props.type === 'aktiviteter') {
        icon = 'icon-check_circle';
        iconTitle = props.activityText;
    }

    if (props.toBeCompared) {
        totalComparisonComp = (
            <Typography className={styles.totalComparison}
                type={'ingressStrong'}
            >
                {totalComparisonValue}
            </Typography>
        );
    }

    return (
        <div className={classNames(styles.wrapper, {[props.className]: props.className})}>
            <Icon
                className={classNames(styles.icon,
                    {[styles.pointsIcon]: iconTitle === props.pointsText},
                    {[styles.co2Icon]: iconTitle === props.savingsText},
                    {[styles.aktiviteterIcon]: iconTitle === props.activityText}
                )}
                icon={icon}
                size={'standard'}
            />
            <div className={styles.typo}>
                <Typography className={styles.typoInner}
                    type={'caption2Strong'}
                >
                    {iconTitle}
                </Typography>
                <Typography className={styles.typoInner}
                    type={'caption1Normal'}
                >
                    {props.totalText}
                </Typography>
            </div>
            {totalComparisonComp}
            <Typography className={props.toBeCompared
                    ? styles.totalUserWhenCompared : styles.totalUser}
                type={props.toBeCompared ? 'ingressStrong' : 'header1'}
            >
                {totalUserValue}
            </Typography>
        </div>
    );
}

ProfilePageMeta.propTypes = {
    activityText: PropTypes.string,
    className: PropTypes.string,
    pointsText: PropTypes.string,
    savingsText: PropTypes.string,
    toBeCompared: PropTypes.bool,
    totalText: PropTypes.string,
    totalComparisonValue: PropTypes.node,
    totalUserValue: PropTypes.node,
    type: PropTypes.oneOf(['points', 'co2', 'aktiviteter'])
};

export default ProfilePageMeta;
