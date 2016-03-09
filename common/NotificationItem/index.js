import Icon from './../Icon';
import TimeStamp from './../TimeStamp';
import React from 'react';
import Spacer from './../Spacer';
import Typo from './../Typography';
import Wrapper from './../Wrapper';
import styles from './NotificationItem.css';

class NotificationItem extends React.Component {
    render() {
        return (
            <span className={styles.span} onClick={this.props.onClick}>
                <Wrapper className={styles.wrapper}>
                    <div className={styles.child}>
                        {this.props.children}
                    </div>
                    <div>
                        <div className={styles.top}>
                            <Typo className={styles.typo}
                                type={"caption2Normal"}
                            >
                                {this.props.text}
                            </Typo>
                        </div>
                        <Spacer hr
                            size={'standard'}
                        />
                        <div className={styles.bottom}>
                            <Icon className={styles.icon}
                                icon={this.props.icon}
                                size={"micro"}
                            />
                            <TimeStamp className={styles.timeStamp}
                                dateTime={this.props.dateTime}
                            />
                        </div>
                    </div>
                </Wrapper>
            </span>
        );
    }
}

NotificationItem.displayName = "Notification Item";
NotificationItem.propTypes = {
    children: React.PropTypes.node,
    dateTime: React.PropTypes.shape({}),
    icon: React.PropTypes.string,
    text: React.PropTypes.string
};
export default NotificationItem;
