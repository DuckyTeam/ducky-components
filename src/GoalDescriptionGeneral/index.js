import Icon from '../Icon';
import Typography from '../Typography';
import GoalButtonPopOverMenuItem from '../GoalButtonPopOverMenuItem';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.css';
import moment from 'moment';

moment.locale('nb', {
    calendar: {
        lastDay: "D. MMM",
        sameDay: "D. MMM",
        nextDay: "D. MMM",
        lastWeek: "D. MMM",
        nextWeek: "D. MMM",
        sameElse: "D. MMM"
    }
});

function GoalDescriptionGeneral(props) {
    let icon = 'icon-assignment_turned_in';
    let text = 'Gjennomføre 10 ganger for å bygge vane';
    let caption = props.selectedActivityName;
    const momentStartDate = moment(props.startDate).startOf('day').valueOf();
    const momentEndDate = moment(props.endDate).startOf('day').valueOf();
    const momentToday = moment(Date.now()).startOf('day').valueOf();
    const daysRemainingToEnd = moment(momentEndDate).diff(momentToday, 'days');
    const daysRemainingToStart = moment(momentStartDate).diff(momentToday, 'days');
    let dateInfo = `Starter ${props.startDate}`;

    if (props.type.toUpperCase() === 'ACTIVITY') {
        icon = 'icon-check_circle';
        text = `Gjennomføre ${props.numberRegistration}` +
                  ` ganger iløpet av ${props.numberDays} dager`;
        caption = props.selectedActivityName;
    } else if (props.type.toUpperCase() === 'CO2') {
        icon = 'icon-leaf';
        text =
          `Gjennomføre ${props.savingsAmount} kgCO\u2082e iløpet av ${props.numberDays} dager`;
        caption = 'Innsparing';
    } else if (props.type.toUpperCase() === 'POINTS') {
        icon = 'icon-brightness_high';
        text = `Tjene opp ${props.goalPointsAmount} poeng iløpet av ${props.numberDays} dager`;
        caption = 'Poeng';
    }

    if (props.type.toUpperCase() === 'HABIT' && momentToday > momentStartDate) {
        dateInfo = `Startet ${props.startDate}`;
    } else if (momentToday > momentStartDate && daysRemainingToEnd === 1) {
        dateInfo = 'Slutter imorgen';
    } else if (momentToday > momentStartDate && daysRemainingToEnd > 1 && daysRemainingToEnd < 7) {
        dateInfo = `Slutter om ${daysRemainingToEnd} dager`;
    } else if (momentToday < momentStartDate && daysRemainingToStart === 1) {
        dateInfo = 'Starter imorgen';
    } else if
        (momentToday < momentStartDate && daysRemainingToStart > 1 && daysRemainingToStart < 7) {
        dateInfo = `Starter om ${daysRemainingToStart} dager`;
    } else if (momentToday === momentEndDate && props.finished) {
        dateInfo = `Fullført ${props.endDate}`;
    } else if (momentToday === momentEndDate && !props.finished) {
        dateInfo = `Sluttet  ${props.endDate}`;
    }


    return (
        <div
            className={classNames(styles.wrapper, {
                [props.className]: props.className
            })}
            size={'short'}
        >
            <GoalButtonPopOverMenuItem
                className={styles.goalPop}
                onClick={props.handleMoreClick}
                show={props.show}
            />
            <Icon
                className={classNames(styles.icon,
                    {[styles.pointsIcon]: icon === 'icon-brightness_high'},
                    {[styles.co2Icon]: icon === 'icon-leaf'},
                    {[styles.activityIcon]: icon === 'icon-check_circle'},
                    {[styles.habitIcon]: icon === 'icon-assignment_turned_in'},
                )}
                icon={icon}
                size={'large1'}
            />
            <div className={styles.innerWrapper}>
                <Typography
                    type={'bodyTextStrong'}
                >
                    {caption}
                </Typography>
                <Typography
                    type={'caption2Normal'}
                >
                    {text}
                </Typography>
                <Typography
                    className={styles.text}
                    type={'caption2Normal'}
                >
                    {dateInfo}
                </Typography>
            </div>
        </div>
    );
}

GoalDescriptionGeneral.propTypes = {
    className: PropTypes.string,
    endDate: PropTypes.string,
    finished: PropTypes.bool,
    goalPointsAmount: PropTypes.number,
    handleMoreClick: PropTypes.func,
    numberDays: PropTypes.number,
    numberRegistration: PropTypes.number,
    onClick: PropTypes.func,
    savingsAmount: PropTypes.number,
    selectedActivityName: PropTypes.string,
    show: PropTypes.bool,
    startDate: PropTypes.string,
    type: PropTypes.string
};

export default GoalDescriptionGeneral;
