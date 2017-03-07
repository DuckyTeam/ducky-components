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
      size={'short'}
      >
      <Icon
        className={styles.icon}
        icon={'icon-hashtag'}
        size={'micro'}
        />
      <Typography
        className={styles.name}
        type={'caption2Normal'}
        >
          {props.nameText}
      </Typography>
      <Typography
        className={styles.saving}
        type={'caption2Normal'}
        >
        {props.savingText}
      </Typography>
    </Wrapper>
  );
}

LeaderboardHeader6.propTypes = {
  className: React.PropTypes.string,
  nameText: React.PropTypes.string,
  savingText: React.PropTypes.string
};

export default LeaderboardHeader6;
