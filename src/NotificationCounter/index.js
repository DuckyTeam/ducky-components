import React from 'react';
import Typo from '../Typography';
import Wrapper from '../Wrapper';
import classNames from 'classnames';
import styles from './styles.css';

function NotificationCounter(props) {
  return (
    <Wrapper className={styles.nCounter}><Typo>{props.number}</Typo></Wrapper>

    );
}

NotificationCounter.displayName = "Notification Counter";
NotificationCounter.propTypes = {

  number: React.PropTypes.string

};
export default NotificationCounter;
