import Avatar from '../../Avatar';
import ProgressBar from '../../ProgressBar';
import LabelSmall from '../../LabelSmall';
import LabelStandard from '../../LabelStandard';
import React from 'react';
import Typography from '../../Typography';
import classNames from 'classnames';
import styles from './styles.css';

function LeaderboardComposite5(props) {
    let ranking = (
        <Typography
            className={styles.ranking}
            type={'caption1Normal'}
        >
            {props.ranking}
        </Typography>
    );

    if (props.yourHousehold && !props.isLeader) {
        ranking = (
            <Typography
                className={styles.ranking}
                type={'caption1Strong'}
            >
                {props.ranking}
            </Typography>
      );
    }

    if (props.isLeader) {
        ranking = (
            <LabelStandard
                className={styles.leader}
                content={props.ranking || 1}
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

            {ranking}
            <Avatar
                className={styles.avatar}
                image={props.avatarURL}
                onClick={props.handleOnAvatarClicked}
                size={props.yourHousehold || props.isLeader ? 'standard' : 'small'}
            />
            <Typography
                className={styles.name}
                type={'bodyTextStrong'}
            >
                {props.name}
            </Typography>
            {
              props.challengeType === 'household' ?
                <div className={styles.labelSmallWrapperOne}>
                    <LabelSmall
                        className={styles.labelSmall}
                        content={props.householdMemberCount}
                        icon={'icon-people'}
                        type={"caption2Normal"}
                    />
                </div>
            :
              null
            }
            <div className={styles.labelSmallWrapperTwo}>
                <LabelSmall
                    className={styles.labelSmall}
                    content={props.actionsCount}
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
                    content={props.co2InChallenge}
                    icon={'icon-leaf'}
                    type={'caption2Normal'}
                />
            </div>
        </div>
    );
}

LeaderboardComposite5.propTypes = {
    avatarURL: React.PropTypes.string,
    challengeType: React.PropTypes.string,
    className: React.PropTypes.string,
    handleOnAvatarClicked: React.PropTypes.func,
    actionsCount: React.PropTypes.string,
    co2InChallenge: React.PropTypes.number,
    householdMemberCount: React.PropTypes.number,
    name: React.PropTypes.string,
    ranking: React.PropTypes.number,
    isLeader: React.PropTypes.bool,
    progressRelativePercent: React.PropTypes.number,
    yourHousehold: React.PropTypes.bool
};

export default LeaderboardComposite5;
