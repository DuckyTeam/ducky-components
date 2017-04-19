import React from 'react';
import Icon from '../Icon';
import Spacer from '../Spacer';
import styles from './styles.css';

function LeaderboardSeparator1() {
  return (
    <div className={styles.wrapper}>
      <Spacer size="double" />
      <div className={styles.iconWrapper}>
        <Icon
          className={styles.icon}
          icon="icon-dots-vertical"
          />
      </div>
    </div>
  );
}

export default LeaderboardSeparator1;
