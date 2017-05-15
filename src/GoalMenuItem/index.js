import Icon from '../Icon';
import ActionButton from '../ActionButton';
import Wrapper from '../Wrapper';
import Typography from '../Typography';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.css';

function GoalMenuItem(props) {
    let icon = 'icon-assignment_turned_in';
    let text = props.inactive ? 'Du er allerede igang med å bygge en vane.' : 'Vaner gir deg mulighet til å autoregistrere aktiviteter.';
    let caption = 'Bygg en ny vane';

    if (props.type.toUpperCase() === 'ACTIVITY') {
        icon = 'icon-check_circle';
        text = props.inactive ? 'Du har allerede et aktivt aktivitetsmål.' : 'F.eks. “Gjennomfør en aktivitet 24 ganger iløpet av 30 dager”';
        caption = 'Aktivitetsmål';
    } else if (props.type.toUpperCase() === 'CO2') {
        icon = 'icon-leaf';
        text = props.inactive ? 'Du har allerede et aktivt innsparingsmål.' : 'F.eks. “Spare inn 150 kgCO\u2082e iløpet av 30 dager”';
        caption = 'Innsparingsmål';
    } else if (props.type.toUpperCase() === 'POINTS') {
        icon = 'icon-brightness_high';
        text = props.inactive ? 'Du har allerede et aktivt poengmål' : 'F.eks. “Tjene opp 300 poeng iløpet av 14 dager”';
        caption = 'Poengmål';
    }

    return (
        <Wrapper
            className={classNames(styles.wrapper,
                {[props.className]: props.className},
                {[styles.wrapperInactive]: props.inactive}
            )}
            size={'short'}
        >
            <Icon
                className={classNames(styles.icon,
                    {[styles.pointsIcon]: caption === 'Poengmål'},
                    {[styles.co2Icon]: caption === 'Innsparingsmål'},
                    {[styles.activityIcon]: caption === 'Aktivitetsmål'},
                    {[styles.habitIcon]: caption === 'Bygg en ny vane'},
                    {[styles.inactiveColor]: props.inactive}
                )}
                icon={icon}
                size={'large1'}
            />
            <div className={styles.innerWrapper}>
                <Typography
                    className={classNames(styles.caption,
                        {[styles.inactiveColor]: props.inactive}
                      )}
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
                    className={classNames(styles.buttonIcon,
                        {[styles.inactiveButtonIcon]: props.inactive}
                      )}
                    icon={'icon-keyboard_arrow_right'}
                    onClick={props.onClick}
                    size={'standard'}
                />
            </div>
        </Wrapper>
    );
}

GoalMenuItem.propTypes = {
    className: PropTypes.string,
    inactive: PropTypes.bool,
    onClick: PropTypes.func,
    type: PropTypes.string
};

export default GoalMenuItem;
