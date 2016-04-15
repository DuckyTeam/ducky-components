import Icon from './../Icon';
import React from 'react';
import Spacer from './../Spacer';
import TimeStamp from './../TimeStamp';
import Typo from './../Typography';
import Wrapper from './../Wrapper';
import classNames from 'classnames';
import styles from './NotificationItem.css';

class NotificationItem extends React.Component {
    render() {
        return (
            <span
                onClick={this.props.onClick}
            >
                <Wrapper
                    className={classNames(styles[this.props.seen], {
                        [this.props.className]: this.props.className
                    })}
                    size={'short'}
                >
                    <div className={styles.child}>
                        {this.props.children}
                    </div>
                    <div>
                        <div className={styles.top}>
                            <Typo className={styles.typo}
                                type={"caption2Normal"}
                            >
                                {this.props.name + this.props.text}
                            </Typo>
                        </div>
                        <Spacer
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
    classNames: React.PropTypes.string,
    dateTime: React.PropTypes.shape({}),
    icon: React.PropTypes.string,
    name: React.PropTypes.string,
    onClick: React.PropTypes.func,
    seen: React.PropTypes.string,
    text: React.PropTypes.string
};
export default NotificationItem;
