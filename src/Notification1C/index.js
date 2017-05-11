import Icon from '../Icon';
import Wrapper from '../Wrapper';
import NotificationItem from '../NotificationItem';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';
function Notification1C(props) {
  return (
      <NotificationItem
        buttonClicked={props.buttonClicked}
        buttonText={props.buttonText}
        children={props.children}
        className={props.className}
        dateTime={props.dateTime}
        icon={props.icon}
        name={props.name}
        onClick={props.onClick}
        seen={props.seen}
        text={props.text}
        type={props.type}
        >
        <Icon
          className={styles.icon}
          size={'standard'}
          icon={props.mainIcon}
          />
      </NotificationItem>
  );
}

Notification1C.propTypes = {
  buttonClicked: PropTypes.func,
  buttonText: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  dateTime: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  mainIcon: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  seen: PropTypes.bool,
  size: PropTypes.oneOf(['standard', 'main']),
  text: PropTypes.string,
  type: PropTypes.string
};

export default Notification1C;
