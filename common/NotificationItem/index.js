import Icon from './../Icon';
import React from 'react';
import Spacer from './../Spacer';
import TimeStamp from './../TimeStamp';
import Typo from './../Typography';
import Wrapper from './../Wrapper';
import classNames from 'classnames';
import styles from './NotificationItem.css';

function NotificationItem(props) {
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
                <div className={styles.child}>
                    {props.children}
                </div>
                <div>
                    <div className={styles.top}>
                        <Typo className={styles.typo}
                            type={"caption2Normal"}
                        >
                            {`${props.name} ${props.text}`}
                        </Typo>
                    </div>
                    <Spacer
                        size={'standard'}
                    />
                    <div className={styles.bottom}>
                        <Icon className={styles.icon}
                            icon={props.icon}
                            size={"micro"}
                        />
                        <TimeStamp className={styles.timeStamp}
                            dateTime={props.dateTime}
                        />
                    </div>
                </div>
            </Wrapper>
        </div>
    );
}

NotificationItem.displayName = "Notification Item";
NotificationItem.propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    dateTime: React.PropTypes.shape({}),
    icon: React.PropTypes.string,
    name: React.PropTypes.string,
    onClick: React.PropTypes.func,
    seen: React.PropTypes.bool,
    text: React.PropTypes.string
};
export default NotificationItem;
