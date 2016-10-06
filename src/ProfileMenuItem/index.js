import LabelTab from '../LabelTab';
import ActionButton from '../ActionButton';
import Typography from '../Typography';
import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';

function ProfileMenuItem(props) {
    let icon = 'icon-check_circle';
    let label = 'Aktivitet';
    let caption = `Siste aktivitet ${props.dateOfLastActivity}`;
    let buttonIcon = 'icon-keyboard_arrow_right';

    if (props.type.toUpperCase() === 'PERSONAL') {
        icon = 'icon-verified_user';
        label = 'Personlige mål';
        caption = `${props.numberGoals} aktive og kommende mål`;
        buttonIcon = 'icon-add';
    } else if (props.type.toUpperCase() === 'INSIGHT') {
        icon = 'icon-timeline';
        label = 'Innsikt';
        const totalSavings = props.totalSavings.toLocaleString();

        caption = `${totalSavings} kgCO\u2082e innspart totalt`;
    } else if (props.type.toUpperCase() === 'FOOTPRINT') {
        icon = 'icon-gnome';
        label = 'Fotavtrykk';
        const absPercentCompare = Math.abs(props.percentCompare);
        const percentCompare = props.percentCompare > 0
            ? `${absPercentCompare}% over`
            : `${absPercentCompare}% under`;

        caption = `Ca. ${percentCompare} norsk gjennomsnitt`;
    } else if (props.type.toUpperCase() === 'CHALLENGES') {
        icon = 'icon-trophy';
        label = 'Utfordringer';
        caption = `${props.numberChallenges} aktive og kommende utfordringer`;
    }

    return (
        <div
            className={classNames(styles.wrapper, {
                [props.className]: props.className
            })}
        >
            <div className={styles.innerWrapper}>
                <LabelTab
                    className={styles.labelTab}
                    icon={icon}
                    label={label}
                />
                <Typography
                    className={styles.caption}
                    type={'caption2Normal'}
                >
                    {caption}
                </Typography>
            </div>
            {
              props.type.toUpperCase() === 'PERSONAL' && props.profileType === 'others'
              ? null
              : <div>
                  <ActionButton
                      className={props.type.toUpperCase() === 'PERSONAL'
                          ? styles.buttonIconActivity
                          : styles.buttonIcon}
                      icon={buttonIcon}
                      onClick={props.onClick}
                      size={'standard'}
                  />
              </div>
          }
        </div>
    );
}

ProfileMenuItem.propTypes = {
    className: React.PropTypes.string,
    dateOfLastActivity: React.PropTypes.string,
    numberChallenges: React.PropTypes.number,
    numberGoals: React.PropTypes.number,
    onClick: React.PropTypes.func,
    percentCompare: React.PropTypes.number,
    profileType: React.PropTypes.oneOf(['self', 'others']),
    totalSavings: React.PropTypes.number,
    type: React.PropTypes.oneOf(['personal', 'insight', 'footprint', 'challenges', 'activity'])
};

export default ProfileMenuItem;
