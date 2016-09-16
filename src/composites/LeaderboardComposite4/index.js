import Icon from '../../Icon';
import LabelSmall from '../../LabelSmall';
import LabelStandard from '../../LabelStandard';
import React from 'react';
import Typography from '../../Typography';
import classNames from 'classnames';
import styles from './styles.css';

function LeaderboardComposite4(props) {
    let iconSmiley = 'icon-sentiment_very_satisfied';
    let teamRanking = (
        <Typography
            className={styles.teamRanking}
            type={'caption1Normal'}
        >
            {props.teamRanking}
        </Typography>
    );
    let teamName = (
        <Typography
            className={styles.teamName}
            type={'bodyTextStrong'}
        >
            {props.teamName}
        </Typography>
    );

    if (props.yourTeam && !props.isLeader) {
        teamRanking = (
            <LabelStandard
                className={styles.yourTeamRanking}
                content={props.teamRanking}
                icon={'icon-hashtag'}
                type={'caption2Normal'}
            />
      );

        teamName = (
            <div className={styles.teamName}>
                <Typography
                    type={'bodyTextStrong'}
                >
                    {props.teamName}
                </Typography>
                <div>
                    <Typography
                        type={'caption2Normal'}
                    >
                        {'Ditt lag'}
                    </Typography>
                </div>
            </div>
        );
    }

    if (props.isLeader && !props.yourTeam) {
        teamRanking = (
            <LabelStandard
                className={styles.leader}
                content={props.teamRanking || 1}
                icon={'icon-crown'}
                type={'caption2Normal'}
            />
        );
    }

    if (props.isLeader && props.yourTeam) {
        teamName = (
            <div className={styles.teamName}>
                <Typography
                    type={'bodyTextStrong'}
                >
                    {props.teamName}
                </Typography>
                <div>
                    <Typography
                        type={'caption2Normal'}
                    >
                        {'Ditt lag'}
                    </Typography>
                </div>
            </div>
        );
        teamRanking = (
            <LabelStandard
                className={styles.leader}
                content={props.teamRanking || 1}
                icon={'icon-crown'}
                type={'caption2Normal'}
            />
        );
    }

    if (props.level === 0) {
        iconSmiley = 'icon-sentiment_neutral';
    } else if (props.level === 1) {
        iconSmiley = 'icon-sentiment_satisfied';
    } else if (props.level === 2) {
        iconSmiley = 'icon-tag_faces';
    }

    return (
        <div
            className={classNames(styles.wrapper, {
                [styles.wrapperYourTeam]: props.yourTeam && !props.isLeader,
                [styles.wrapperLeader]: props.isLeader || (props.yourTeam && props.isLeader),
                [props.className]: props.className
            })}
        >

            {teamRanking}
            {teamName}
            <Icon
                className={styles.iconExpand}
                icon={'icon-keyboard_arrow_down'}
                onClick={props.onClick}
                size={'small'}
            />
            <div className={styles.labelSmallWrapperOne}>
                <LabelSmall
                    className={styles.labelSmall}
                    content={props.teamMemberCount}
                    icon={'icon-people'}
                    type={"caption2Normal"}
                />
            </div>
            <div className={styles.labelSmallWrapperTwo}>
                <LabelSmall
                    className={styles.labelSmall}
                    content={props.teamActionsCount}
                    icon={'icon-check_circle'}
                    type={"caption2Normal"}
                />
            </div>
            <div className={styles.iconLargeWrapper}>
                <Icon
                    className={classNames(styles.iconLarge, {
                        [styles.level0]: props.level === 0,
                        [styles.level1]: props.level === 1,
                        [styles.level2]: props.level === 2,
                        [styles.level3]: props.level === 3
                    })}
                    icon={iconSmiley}
                    size={'large1'}
                />
            </div>
            <div className={styles.LabelStandardWrapper}>
                <LabelStandard
                    className={styles.LabelStandard}
                    content={props.teamTotalCo2}
                    icon={'icon-leaf'}
                    type={"caption2Normal"}
                />
            </div>
        </div>
    );
}

LeaderboardComposite4.propTypes = {
    className: React.PropTypes.string,
    isLeader: React.PropTypes.bool,
    level: React.PropTypes.level,
    onClick: React.PropTypes.func,
    teamActionsCount: React.PropTypes.number,
    teamMemberCount: React.PropTypes.string,
    teamName: React.PropTypes.string,
    teamRanking: React.PropTypes.number,
    teamTotalCo2: React.PropTypes.number,
    yourTeam: React.PropTypes.bool
};

export default LeaderboardComposite4;
