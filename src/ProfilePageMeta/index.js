import Icon from '../Icon';
import React from 'react';
import Typography from '../Typography';
import classNames from 'classnames';
import styles from './styles.css';
const PropTypes = React.PropTypes;

function ProfilePageMeta(props) {
    let icon = 'icon-leaf';
    let iconTitle = 'Innsparing';
    let totalComparisonComp = '';
    const totalUserValue = (props.totalUserValue).toLocaleString();
    const totalComparisonValue = props.totalComparisonValue ? (props.totalComparisonValue).toLocaleString() : 0;

    if (props.type === 'points') {
        icon = 'icon-brightness_high';
        iconTitle = 'Poeng';
    } else if (props.type === 'aktiviteter') {
        icon = 'icon-check_circle';
        iconTitle = 'Aktiviteter';
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
                    {[styles.pointsIcon]: iconTitle === 'Poeng'},
                    {[styles.co2Icon]: iconTitle === 'Innsparing'},
                    {[styles.aktiviteterIcon]: iconTitle === 'Aktiviteter'}
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
                    {'Totalt'}
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
    className: PropTypes.string,
    toBeCompared: PropTypes.bool,
    totalComparisonValue: PropTypes.number,
    totalUserValue: PropTypes.number,
    type: PropTypes.oneOf(['points', 'co2', 'aktiviteter'])
};

export default ProfilePageMeta;
