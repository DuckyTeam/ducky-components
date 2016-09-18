import Avatar from '../../Avatar';
import ProgressBar from '../../ProgressBar';
import LabelSmall from '../../LabelSmall';
import LabelStandard from '../../LabelStandard';
import React from 'react';
import Typography from '../../Typography';
import classNames from 'classnames';
import styles from './styles.css';

function LeaderboardComposite5(props) {
    let householdRanking = (
        <Typography
            className={styles.householdRanking}
            type={'caption1Normal'}
        >
            {props.householdRanking}
        </Typography>
    );

    if (props.yourHousehold && !props.isLeader) {
        householdRanking = (
            <Typography
                className={styles.householdRanking}
                type={'caption1Strong'}
            >
                {props.householdRanking}
            </Typography>
      );
    }

    if (props.isLeader) {
        householdRanking = (
            <LabelStandard
                className={styles.leader}
                content={props.householdRanking || 1}
                icon={'icon-crown'}
                type={'caption2Normal'}
            />
        );
    }

    return (
        <div
            className={classNames(styles.wrapper, {
                [props.className]: props.className
            })}
        >

            {householdRanking}
            <Avatar
                className={styles.avatar}
                image={props.avatarURL}
                onClick={props.handleOnAvatarClicked}
                size={props.yourHousehold || props.isLeader ? 'standard' : 'small'}
            />
            <Typography
                className={styles.householdName}
                type={'bodyTextStrong'}
            >
                {props.householdName}
            </Typography>
            <div className={styles.labelSmallWrapperOne}>
                <LabelSmall
                    className={styles.labelSmall}
                    content={props.householdMemberCount}
                    icon={'icon-people'}
                    type={"caption2Normal"}
                />
            </div>
            <div className={styles.labelSmallWrapperTwo}>
                <LabelSmall
                    className={styles.labelSmall}
                    content={props.householdActionsCount}
                    icon={'icon-check_circle'}
                    type={"caption2Normal"}
                />
            </div>
            <ProgressBar
                className={styles.progressBar}
                color={'#00ab97'}
                percent={props.isLeader ? 100 : props.progressRelativePercent}
            />
            <div className={styles.co2Wrapper}>
                <LabelSmall
                    content={props.householdCo2InChallenge}
                    icon={'icon-leaf'}
                    type={'caption2Normal'}
                />
            </div>
        </div>
    );
}

LeaderboardComposite5.propTypes = {
    avatarURL: React.PropTypes.string,
    className: React.PropTypes.string,
    handleOnAvatarClicked: React.PropTypes.func,
    householdActionsCount: React.PropTypes.string,
    householdCo2InChallenge: React.PropTypes.number,
    householdMemberCount: React.PropTypes.number,
    householdName: React.PropTypes.string,
    householdRanking: React.PropTypes.number,
    isLeader: React.PropTypes.bool,
    progressRelativePercent: React.PropTypes.number,
    yourHousehold: React.PropTypes.bool
};

export default LeaderboardComposite5;
