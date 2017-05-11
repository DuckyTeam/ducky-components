import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icon';
import ChallengeMeta4 from '../ChallengeMeta4';
import styles from './styles.css';

function ChallengeMeta7(props) {
  return (
    <div className={classNames(styles.wrapper, {
      [props.className]: props.className
    })}>
      <Icon
        className={classNames(styles.icon, {
          [styles.yourteam]: props.isLeader === true
        })}
        icon={props.icon}
        size="large1"
        />
      <ChallengeMeta4
        className={styles.chamet4}
        isLeader={props.isLeader}
        members={props.memberCount}
        name={props.name}
        theme={props.theme}
        yourTeam={props.isYourteam}
        yourTeamText={props.yourTeamText}
        />
    </div>
  );
}

ChallengeMeta7.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  isLeader: PropTypes.bool,
  isYourteam: PropTypes.bool,
  memberCount: PropTypes.number,
  name: PropTypes.string,
  theme: PropTypes.string,
  yourTeamText: PropTypes.string
};

export default ChallengeMeta7;
