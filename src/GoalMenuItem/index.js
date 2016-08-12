import Icon from '../Icon';
import ActionButton from '../ActionButton';
import Wrapper from '../Wrapper';
import Typography from '../Typography';
import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';

function GoalMenuItem(props) {
    let icon = 'icon-assignment_turned_in';
    let text = 'Vaner gir deg mulighet til å autoregistrere aktiviteter.';
    let caption = 'Bygg en ny vane';

    if (props.type.toUpperCase() === 'ACTIVITY') {
        icon = 'icon-check_circle';
        text = 'F.eks. “Gjennomfør en aktivitet 24 ganger iløpet av 30 dager”';
        caption = 'Aktivitetsmål';
    } else if (props.type.toUpperCase() === 'CO2') {
        icon = 'icon-leaf';
        text = 'F.eks. “Spare inn 150 kgCO\u2082e iløpet av 30 dager”';
        caption = 'Innsparingsmål';
    } else if (props.type.toUpperCase() === 'POINTS') {
        icon = 'icon-brightness_high';
        text = 'F.eks. “Tjene opp 300 poeng iløpet av 14 dager”';
        caption = 'Poengmål';
    }

    return (
        <Wrapper
            className={classNames(styles.wrapper, {
                [props.className]: props.className
            })}
            size={'short'}
        >
            <Icon
                className={classNames(styles.icon,
                    {[styles.pointsIcon]: caption === 'Poengmål'},
                    {[styles.co2Icon]: caption === 'Innsparingsmål'},
                    {[styles.activityIcon]: caption === 'Aktivitetsmål'},
                    {[styles.habitIcon]: caption === 'Bygg en ny vane'},
                )}
                icon={icon}
                size={'large1'}
            />
            <div className={styles.innerWrapper}>
                <Typography
                    className={styles.caption}
                    type={'bodyTextTitle'}
                >
                    {caption}
                </Typography>
                <Typography
                    className={styles.text}
                    type={'caption2Normal'}
                >
                    {text}
                </Typography>
            </div>
            <div>
                <ActionButton
                    className={styles.buttonIcon}
                    icon={'icon-keyboard_arrow_right'}
                    onClick={props.onClick}
                    size={'standard'}
                />
            </div>
        </Wrapper>
    );
}

GoalMenuItem.propTypes = {
    className: React.PropTypes.string,
    onClick: React.PropTypes.func,
    type: React.PropTypes.string
};

export default GoalMenuItem;
