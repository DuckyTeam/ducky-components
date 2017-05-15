import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../Typography';
import LabelSmall from '../LabelSmall';
import classNames from 'classnames';
import styles from './styles.css';

function ChallengeMeta4(props) {
  let teamLabel = '';

  if (props.yourTeam) {
    teamLabel = props.yourTeamText;
  }
  return (
    <div className={classNames(styles.wrapper, {
      [props.className]: props.className
    })}>
      <Typography
        className={classNames(styles.nameLightBackground, {
          [styles.nameDarkBackground]: props.theme === 'dark'
        })}
        type="bodyTextStrong"
        >
        {props.name}
      </Typography>
      <div className={styles.statsWrapper}>
        <LabelSmall
          className={classNames(styles.membersLightBackground, {
            [styles.membersDarkBackground]: props.theme === 'dark'
          })}
          content={props.members}
          icon={'icon-people'}
          type={"caption2Normal"}
          />
        <Typography
          className={classNames(styles.labelLightBackground, {
            [styles.labelDarkBackground]: props.theme === 'dark'
          })}
          type="caption2Normal"
          >
          {teamLabel}
        </Typography>
      </div>
    </div>
  );
}

ChallengeMeta4.propTypes = {
  className: PropTypes.string,
  isLeader: PropTypes.bool,
  members: PropTypes.number,
  name: PropTypes.string,
  theme: PropTypes.string,
  yourTeam: PropTypes.bool,
  yourTeamText: PropTypes.string
};

export default ChallengeMeta4;
