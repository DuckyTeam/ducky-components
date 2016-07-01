import Icon from '../Icon';
import React from 'react';
import Spacer from '../Spacer';
import TimeStamp from '../TimeStamp';
import Typo from '../Typography';
import Wrapper from '../Wrapper';
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
                        <Typo className={props.type === 'challenge' ? styles.name : styles.typo}
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
                        {opt}
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
    dateTime: React.PropTypes.number,
    icon: React.PropTypes.string,
    name: React.PropTypes.string,
    onClick: React.PropTypes.func,
    seen: React.PropTypes.bool,
    text: React.PropTypes.string,
    type: React.PropTypes.string
};
export default NotificationItem;
