import React from 'react';
import ChallengeMeta4 from '../ChallengeMeta4';
import Wrapper from '../Wrapper';
import Icon from '../Icon';
import styles from './styles.css';

function ChallengeMeta6(props) {
  return (
    <div>
      <Wrapper
        className={styles.wrapper}
        size={'standard'}
      >
        <Icon
          className={styles.teamIcon}
          icon={'icon-team'}
          size={'large'}
        />
        <ChallengeMeta4
          members={123}
          name={'Group Name'}
          team
        />
        <Icon
          className={styles.selectedIcon}
          icon={'icon-check'}
          size={'large'}
        />
      </Wrapper>
    </div>
  );
}

ChallengeMeta4.propTypes = {
  goal: React.PropTypes.number,
  level: React.PropTypes.number,
  progress: React.PropTypes.number
};

export default ChallengeMeta6;
