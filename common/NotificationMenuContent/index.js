import Avatar from '../Avatar';
import Icon from '../Icon';
import NotificationItem from '../NotificationItem';
import React from 'react';
import Spacer from '../Spacer';
import Typography from '../Typography';
import Wrapper from '../Wrapper';
import classNames from 'classnames';
import styles from './NotificationMenuContent.css';
const PropTypes = React.PropTypes;

let index = 0;
const items = [];

function NotificationMenuContent(props) {
    if (props.notifications.length > 0) {
        for (; index < props.notifications.length; index += 1) {
            items.push(
                <NotificationItem
                    className={classNames(styles.item, {
                        [props.className]: props.className
                    })}
                    dateTime={props.notifications[index].date}
                    icon={props.notifications[index].icon}
                    onClick={props.onClick}
                    text={props.notifications[index].text}
                >
                    <Avatar
                        size={"standard"}
                        user={"all"}
                    />
                </NotificationItem>
            );
        }
        return (
            <div>
                <Spacer
                    size={'double'}
                />
                {items}
            </div>
        );
    }

    return (
        <div
            className={styles.wrapper}
        >
            <Icon
                className={styles.icon}
                icon={'icon-notifications_none'}
                size={'display2'}
            />
            <Wrapper
                size={'standard'}
            >
                <Typography
                    className={styles.text}
                    type={'bodyTextNormal'}
                >
                    {'Du har ingen varsler ennå...'}
                </Typography>
            </Wrapper>
        </div>
    );
}

NotificationMenuContent.propTypes = {
    className: PropTypes.string,
    notifications: PropTypes.list,
    onClick: PropTypes.func
};

export default NotificationMenuContent;
