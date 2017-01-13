import Icon from '../Icon';
import Wrapper from '../Wrapper';
import NotificationItem from '../NotificationItem';
import React from 'react';
import styles from './styles.css';
function Notification1B(props) {
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

Notification1B.propTypes = {
  buttonClicked: React.PropTypes.func,
  buttonText: React.PropTypes.string,
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  dateTime: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  icon: React.PropTypes.string,
  mainIcon: React.PropTypes.string,
  name: React.PropTypes.string,
  onClick: React.PropTypes.func,
  seen: React.PropTypes.bool,
  size: React.PropTypes.oneOf(['standard', 'main']),
  text: React.PropTypes.string,
  type: React.PropTypes.string
};

export default Notification1B;
