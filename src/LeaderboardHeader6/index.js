import Icon from '../Icon';
import React from 'react';
import Typography from '../Typography';
import Wrapper from '../Wrapper';
import classNames from 'classnames';
import styles from './styles.css';

function LeaderboardHeader6(props) {
  return (
    <Wrapper
      className={classNames(styles.wrapper, {
        [props.className]: props.className
      })}
      >
      <Typography
        className={styles.header}
        type={'bodyTextStrong'}
        >
          {'Toppliste'}
      </Typography>
      <div className={styles.contentWrapper}>
        <Icon
          className={styles.icon}
          icon={'icon-hashtag'}
          size={'micro'}
          />
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
    </Wrapper>
  );
}

LeaderboardHeader6.propTypes = {
  className: React.PropTypes.string
};

export default LeaderboardHeader6;
