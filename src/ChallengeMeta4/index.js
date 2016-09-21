import React from 'react';
import Typography from '../Typography';
import LabelSmall from '../LabelSmall';
import styles from './styles.css';

function ChallengeMeta4(props) {
  let teamLabel = '';

  if (props.team) {
    teamLabel = '(Ditt lag)';
  }
  if (props.team && props.isLeader) {
    teamLabel = '(Ditt lag - Leder)';
  }
  if (props.isLeader && !props.team) {
    teamLabel = '(Leader)';
  }
  return (
    <div className={styles.wrapper}>
      <Typography
        className={styles.name}
        type="bodyTextStrong"
      >
        {props.name}
      </Typography>
      <div className={styles.statsWrapper}>
        <LabelSmall
          className={styles.members}
          content={props.members}
          icon={'icon-people'}
          type={"caption2Normal"}
        />
        <Typography
          className={styles.label}
          type="caption2Normal"
        >
          {teamLabel}
        </Typography>
      </div>
    </div>
  );
}

ChallengeMeta4.propTypes = {
  isLeader: React.PropTypes.bool,
  members: React.PropTypes.number,
  name: React.PropTypes.string,
  team: React.PropTypes.string
};

export default ChallengeMeta4;
