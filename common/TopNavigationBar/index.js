import Avatar from "./../Avatar";
import ButtonCounter from "./../ButtonCounter";
import React from "react";
import Typography from "./../Typography";
import styles from "./TopNavigationBar.css";

function getNotificationCounter(number) {
    if (number === 0) {
        return (<i className={`icon-notifications_none ${styles.rightIcon}`} />);
    }

    return (
        <ButtonCounter
            className={styles.counter}
            number={number}
            size={'small'}
        />
    );
}

class TopNavigationBar extends React.Component {

    render() {
        return (
            <div className={styles.container}>
                <a onClick={this.props.onClickMenu}>
                    <i className={`${styles.menuIcon} icon-menu`} />
                </a>
                <a onClick={this.props.onClickDucky}>
                    <i className={`${styles.logo} icon-duckylogo`} />
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
                    <Avatar className={styles.rightIcon}
                        size={"small"}
                        user={"all"}
                    />
                </a>
                <a onClick={this.props.onClickNotification}>
                    {getNotificationCounter(this.props.notifications)}
                </a>
                <a onClick={this.props.onClickSearch}>
                    <i className={`icon-search ${styles.rightIcon}`} />
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
