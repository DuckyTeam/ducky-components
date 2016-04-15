import Avatar from "./../Avatar";
import ButtonCounter from "./../ButtonCounter";
import React from "react";
import Typography from "./../Typography";
import styles from "./TopNavigationBar.css";

class TopNavigationBar extends React.Component {

    getNotificationCounter(number) {
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
                    <Avatar className={styles.profileIcon}
                        image={this.props.avatar}
                        link={this.props.profileLink}
                        size={"small"}
                    />
                </a>
                <a onClick={this.props.onClickNotification}>
                    {this.getNotificationCounter(this.props.notifications)}
                </a>
                {/*<a onClick={this.props.onClickSearch}>
                    <i className={`icon-search ${styles.rightIcon}`} />
                </a>*/}
            </div>
        );
    }
}

TopNavigationBar.propTypes = {
    avatar: React.PropTypes.string,
    notifications: React.PropTypes.number,
    onClickDucky: React.PropTypes.func,
    onClickMenu: React.PropTypes.func,
    onClickNotification: React.PropTypes.func,
    onClickProfile: React.PropTypes.func,
    onClickSearch: React.PropTypes.func,
    profileLink: React.PropTypes.string,
    title: React.PropTypes.string
};

TopNavigationBar.displayName = "TopNavBar";
export default TopNavigationBar;
