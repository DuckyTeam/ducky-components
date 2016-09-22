import React from 'react';
import ChallengeMeta4 from '../ChallengeMeta4';
import Wrapper from '../Wrapper';
import Icon from '../Icon';
import classNames from 'classnames';
import styles from './styles.css';

function ChallengeMeta6(props) {
  return (
    <div>
      <Wrapper
        className={classNames(styles.wrapper, {
          [props.className]: props.className
        })}
        onClick={props.onClick}
        size={'standard'}
      >
        <Icon
          className={classNames(styles.teamIcon, {
            [styles.selectedTeamIcon]: props.selected
          })}
          icon={'icon-people'}
          size={'large1'}
        />
        <ChallengeMeta4
          className={styles.meta}
          isLeader={props.isLeader}
          members={props.members}
          name={props.name}
          team={props.yourTeam}
        />
      {props.selected
      ?
        <Icon
          className={styles.checkIcon}
          icon={'icon-check'}
          size={'large1'}
        />
      :
        null
      }
      </Wrapper>
    </div>
  );
}

ChallengeMeta6.propTypes = {
  className: React.PropTypes.string,
  isLeader: React.PropTypes.bool,
  members: React.PropTypes.number,
  name: React.PropTypes.string,
  onClick: React.PropTypes.func,
  selected: React.PropTypes.bool,
  yourTeam: React.PropTypes.string
};

export default ChallengeMeta6;
