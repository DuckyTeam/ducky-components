import React from 'react';
import Typo from '../Typography';
import Wrapper from '../Wrapper';
import styles from './styles.css';

function NotificationCounter(props) {
  return (
    <Wrapper className={styles.nCounter}>
      <Typo>{props.number}
      </Typo>
    </Wrapper>
    );
}
NotificationCounter.displayName = "Notification Counter";
NotificationCounter.propTypes = {

  number: React.PropTypes.number

};
export default NotificationCounter;
