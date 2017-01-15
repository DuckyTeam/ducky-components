import Icon from '../Icon';
import React from 'react';
import Spacer from '../Spacer';
import TimeStamp from '../TimeStamp';
import Typo from '../Typography';
import Wrapper from '../Wrapper';
import Button from '../ButtonRaised';
import Label from '../LabelSmall';
import classNames from 'classnames';
import styles from './styles.css';

function NotificationItem(props) {
  let opt = '';
  let optCh = (
        <Icon className={styles.challengeIcon}
          icon={props.icon}
          size={"standard"}
          />
    );

  if (props.type !== 'challenge') {
    opt = (
            <Icon className={styles.icon}
              icon={props.icon}
              size={"micro"}
              />
        );
    optCh = (
            <div className={styles.child}>
                {props.children}
            </div>
        );
  }

  return (
        <div
          className={styles.item}
          onClick={props.onClick}
          >
          <Wrapper
            className={classNames(styles[props.seen], {
              [props.className]: props.className
            })}
            size={'short'}
            >
            <div>
              {optCh}
            </div>
            <div>
              <div className={styles.top}>
                <Typo className={styles.typo}
                  type={"caption2Normal"}
                  >
                  {props.textBeforeName}{" "}
                </Typo>
                <Typo className={styles.name}
                  type={"caption2Normal"}
                  >
                  {props.name}
                </Typo>
                <Typo className={styles.typo}
                  type={"caption2Normal"}
                  >
                  {" "}{props.text}
                </Typo>
                    </div>
                    <Spacer
                      size={'standard'}
                      />
                    <div className={styles.bottom}>
                        <span className={props.buttonClicked ? styles.timeStamp : styles.timeStampPadded}>
                          {opt}
                          <TimeStamp
                            dateTime={props.dateTime}
                            />
                        </span>
                        {props.buttonClicked ?
                          <Label
                            className={styles.label}
                            content={"Godkjent"}
                            icon={"icon-check"}
                            type={"caption2Normal"}
                            />
                          :
                          <Button
                            className={styles.button}
                            onClick={props.buttonOnClick}
                            type={"raised"}
                            >
                            {props.buttonText}
                          </Button>
                        }
                    </div>
                </div>
            </Wrapper>
        </div>
    );
}

NotificationItem.displayName = "Notification Item";
NotificationItem.propTypes = {
  buttonClicked: React.PropTypes.bool,
  buttonText: React.PropTypes.string,
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  dateTime: React.PropTypes.number,
  icon: React.PropTypes.string,
  name: React.PropTypes.string,
  onClick: React.PropTypes.func,
  seen: React.PropTypes.bool,
  text: React.PropTypes.string,
  textBeforeName: React.PropTypes.string,
  type: React.PropTypes.oneOf(['challenge', 'default'])
};
export default NotificationItem;
