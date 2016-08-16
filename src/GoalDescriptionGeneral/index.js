import Icon from '../Icon';
import Typography from '../Typography';
import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';

function GoalDescriptionGeneral(props) {
    let icon = 'icon-assignment_turned_in';
    let text = 'Gjennomføre 10 ganger for å bygge vane';
    let caption = props.selectedActivityName;

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

    return (
        <div
            className={classNames(styles.wrapper, {
                [props.className]: props.className
            })}
            size={'short'}
        >
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
                    {'Slutter om 7 dager'}
                </Typography>
            </div>
        </div>
    );
}

GoalDescriptionGeneral.propTypes = {
    className: React.PropTypes.string,
    goalPointsAmount: React.PropTypes.number,
    numberDays: React.PropTypes.number,
    numberRegistration: React.PropTypes.number,
    onClick: React.PropTypes.func,
    savingsAmount: React.PropTypes.number,
    selectedActivityName: React.PropTypes.string,
    type: React.PropTypes.string
};

export default GoalDescriptionGeneral;
