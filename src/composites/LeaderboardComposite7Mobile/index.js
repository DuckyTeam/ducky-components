import Icon from './../../Icon';
import LabelSmall from './../../LabelSmall';
import LabelStandard from './../../LabelStandard';
import React from 'react';
import Typography from './../../Typography';
import classNames from 'classnames';
import styles from './styles.css';
const PropTypes = React.PropTypes;

function LeaderboardComposite7(props) {
  let opt = '';

  if (props.yourTeam && !props.isLeader) {
    opt = (
      <Typography
        className={styles.typoTeam}
        type="caption2Normal"
      >
        {'(Ditt lag)'}
      </Typography>
    );
  }

  if (props.isLeader && !props.yourTeam) {
    opt = (
      <Typography
        className={styles.typoTeam}
        type="caption2Normal"
      >
        {'(Leder)'}
      </Typography>
    );
  }

  if (props.isLeader && props.yourTeam) {
    opt = (
      <Typography
        className={styles.typoTeam}
        type="caption2Normal"
      >
        {'(Ditt lag - Leder)'}
      </Typography>
    );
  }

  let teamRanking = (
    <Typography
      className={styles.teamRanking}
      type={'caption1Normal'}
    >
      {props.teamRanking}
    </Typography>
  );
  let teamName = (
    <div className={styles.teamName}>
      <Typography
        type="bodyTextStrong"
      >
        {props.teamName}
      </Typography>
      <div>
        <LabelSmall
          className={styles.labelSmall}
          content={props.teamMemberCount}
          icon="icon-people"
          type="caption2Normal"
        />
        {opt}
      </div>
    </div>
  );

  if (props.yourTeam && !props.isLeader) {
    teamRanking = (
      <LabelStandard
        className={styles.yourTeamRanking}
        content={props.teamRanking}
        icon="icon-hashtag"
        type="caption2Normal"
      />
    );
  }

  if (props.isLeader && !props.yourTeam) {
    teamRanking = (
      <LabelStandard
        className={styles.leader}
        content={props.teamRanking || 1}
        icon="icon-crown"
        type="caption2Normal"
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
          <LabelSmall
            className={styles.labelSmall}
            content={props.teamMemberCount}
            icon="icon-people"
            type="caption2Normal"
          />
          <Typography
            className={styles.typoTeam}
            type="caption2Normal"
          >
            {'(Ditt lag - Leder)'}
          </Typography>
        </div>
      </div>
    );
    teamRanking = (
      <LabelStandard
        className={styles.leader}
        content={props.teamRanking || 1}
        icon="icon-crown"
        type="caption2Normal"
      />
    );
  }

  return (
    <div
      className={classNames(styles.wrapper, {
        [styles.wrapperYourTeam]: props.yourTeam && !props.isLeader,
        [styles.wrapperLeader]: props.isLeader || (props.yourTeam && props.isLeader),
        [props.className]: props.className
      })}
      onClick={props.onClick}
    >
      {teamRanking}
      {teamName}
      <Icon
        className={classNames(styles.iconExpand, {[styles.iconExpandActive]: props.opened})}
        icon={props.opened ? 'icon-keyboard_arrow_up' : 'icon-keyboard_arrow_down'}
        onClick={props.onClick}
        size="small"
      />
      <div className={styles.labelStandardWrapper}>
        <LabelStandard
          className={styles.labelStandard}
          content={props.teamTotalCo2}
          icon="icon-leaf"
          type="caption2Normal"
        />
      </div>
    </div>
  );
}

LeaderboardComposite7.propTypes = {
  className: PropTypes.string,
  isLeader: PropTypes.bool,
  onClick: PropTypes.func,
  opened: PropTypes.bool,
  teamMemberCount: PropTypes.number,
  teamName: PropTypes.string,
  teamRanking: PropTypes.number,
  teamTotalCo2: PropTypes.number,
  yourTeam: PropTypes.bool
};
export default LeaderboardComposite7;
