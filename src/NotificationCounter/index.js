import React from 'react';
import PropTypes from 'prop-types';
import Typo from '../Typography';
import Wrapper from '../Wrapper';
import styles from './styles.css';
import classNames from 'classnames';

const MAX_NUM_SMALL = 99;

function NotificationCounter(props) {
  let counter = props.number;

  if (props.size === 'small') {
    if (counter > MAX_NUM_SMALL) {
      counter = '99+';
    }
  }

  return (
    <Wrapper
      className={classNames(styles.nCounter, {
        [props.className]: props.className
      })}
      >
      <Typo
        className={styles.number}
        type={'caption1Normal'}
        >
        {counter}
      </Typo>
    </Wrapper>
    );
}
NotificationCounter.displayName = "Notification Counter";
NotificationCounter.propTypes = {
  className: PropTypes.string,
  number: PropTypes.number,
  size: PropTypes.string
};
export default NotificationCounter;
