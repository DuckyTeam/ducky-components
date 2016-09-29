import Icon from '../Icon';
import React from 'react';
import Typography from '../Typography';
import classNames from 'classnames';
import styles from './styles.css';

function LeaderboardHeader4(props) {
  return (
    <div
      className={classNames(styles.wrapper, {
        [props.className]: props.className
      })}
    >
      <Icon
        className={styles.icon}
        icon={'icon-hashtag'}
        size={'micro'}
      />
      <div className={styles.contentWrapper}>
        <Typography
          className={styles.team}
          type={'caption2Strong'}
        >
            {'Lag'}
        </Typography>
        <Typography
          className={styles.co2Saved}
          type={'caption2Strong'}
        >
          {'Innspart kgCO\u2082e'}
        </Typography>
      </div>
    </div>
  );
}

LeaderboardHeader4.propTypes = {
  className: React.PropTypes.string
};

export default LeaderboardHeader4;
