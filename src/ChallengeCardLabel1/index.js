import ProgressBar from '../ProgressBar';
import Typography from '../Typography';
import LabelSmall from '../LabelSmall';
import classNames from 'classnames';
import Spacer from '../Spacer';
import React from 'react';
import styles from './styles.css';
const PropTypes = React.PropTypes;

function ChallengeCardLabel1(props) {
    let pColor = '';
    let iconName = '';
    let typoText = '';
    let opt = '';
    let percentValue = props.percentValue > 0 ? props.percentValue : 0;

    if (props.type === 'points') {
        pColor = '#8BC34A';
        iconName = 'icon-brightness_high';
        typoText = 'Poeng';
    } else if (props.type === 'co2') {
        pColor = '#00AB97';
        iconName = 'icon-leaf';
        typoText = 'kgCO\u2082e';
    } else if (props.type === 'activities') {
        pColor = '#0099A9';
        iconName = 'icon-check_circle';
        typoText = 'Aktiviteter';
    }

    if (props.goal) {
        opt = (<Typography className={styles.pad}
            type={'caption2Normal'}
               >
            {percentValue}{'%'}
        </Typography>);
    } else {
        opt = (<LabelSmall
            className={classNames(styles.labelSmall, {
                [styles.leader]: props.userPosition === 'leader',
                [styles.user]: props.userPosition !== 'leader'
            })}
            content={props.percentValue > 0 ? props.percentValue : '-'}
            icon={props.userPosition === 'leader' ? 'icon-crown' : 'icon-hashtag'}
            type={"caption2Strong"}
               />
        );
    }
    return (
        <span>
            <ProgressBar
                color={pColor}
                percent={props.progPercent}
            />
            <Spacer size={'standard'} />
            <span className={styles.wrapper}>
                <LabelSmall
                    className={classNames(styles.general,
                            styles[props.type]
                            )}
                    content={props.points > 0 ? props.points : '-'}
                    icon={iconName}
                    type={"caption2Strong"}
                />
                <Typography className={styles.typoText}
                    type={'caption2Normal'}
                >
                    {typoText}
                </Typography>
                    {opt}
            </span>
        </span>
        );
}


ChallengeCardLabel1.propTypes = {
    goal: PropTypes.bool,
    percentValue: PropTypes.number,
    points: PropTypes.number,
    progPercent: PropTypes.number,
    type: PropTypes.oneOf(['points', 'co2', 'activities']),
    userPosition: PropTypes.string
};
export default ChallengeCardLabel1;
