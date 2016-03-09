import Avatar from "./../Avatar";
import React from "react";
import Typography from "./../Typography";
import styles from "./TopNavigationBar.css";

const MAX_NOTIFICATION_NUMBER = 10;

function getNotificationCounter(number) {
    if (number === 0) {
        return (<i className={`zmdi zmdi-notifications-none ${""}`} />);
    } else if (number < MAX_NOTIFICATION_NUMBER) {
        return (<i className={`zmdi zmdi-Ingress_Normal` +
        `${styles.notificationNumber} ${styles.rightIcon}`}
                >{number}</i>);
    }
    return (<i className={`zmdi zmdi-Ingress_Normal` +
    ` ${styles.notificationNumber} ${styles.rightIcon}`}
            >{"9+"}</i>);
}

class TopNavigationBar extends React.Component {

    render() {
        return (
            <div className={styles.container}>
                <a onClick={this.props.onClickMenu}>
                    <i className={`${styles.menuIcon} duckycon-duckylogo`} />
                </a>
                <a onClick={this.props.onClickDucky}>
                    <i className={"duckyconDuckylogo"} />
                </a>
                <Typography className={styles.split}
                    type={"ingressNormal"}
                >
                    {"|"}
                </Typography>
                <Typography className={styles.title}
                    type={"ingressNormal"}
                >
                    {this.props.title}
                </Typography>
                <a onClick={this.props.onClickProfile}>
                    <i className={`zmdi zmdi-account-circle ${styles.rightIcon}`} />
                </a>
                <a onClick={this.props.onClickProfile}>
                    <Avatar className={styles.rightIcon}
                        size={"small"}
                    />
                </a>
                <a onClick={this.props.onClickNotification}>
                    {getNotificationCounter(this.props.notifications)}
                </a>
                <a onClick={this.props.onClickSearch}>
                    <i className={`zmdi zmdi-search ${styles.rightIcon}`} />
                </a>
            </div>
        );
    }
}

TopNavigationBar.propTypes = {
    notifications: React.PropTypes.number,
    onClickDucky: React.PropTypes.func,
    onClickMenu: React.PropTypes.func,
    onClickNotification: React.PropTypes.func,
    onClickProfile: React.PropTypes.func,
    onClickSearch: React.PropTypes.func,
    title: React.PropTypes.string
};

TopNavigationBar.displayName = "TopNavBar";
export default TopNavigationBar;
