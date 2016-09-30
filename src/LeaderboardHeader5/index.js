import React from 'react';
import Typography from '../Typography';
import classNames from 'classnames';
import styles from './styles.css';

function LeaderboardHeader5(props) {
  const caption = props.household ? 'Husholdning' : 'Deltager';

  return (
    <div
      className={classNames(styles.wrapper, {
        [props.className]: props.className
      })}
    >
      <Typography
        className={styles.caption}
        type={'caption2Normal'}
      >
        {caption}
      </Typography>
    </div>
  );
}

LeaderboardHeader5.propTypes = {
  className: React.PropTypes.string,
  household: React.PropTypes.bool
};

export default LeaderboardHeader5;
