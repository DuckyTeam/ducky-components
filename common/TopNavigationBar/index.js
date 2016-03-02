import React from "react";
import styles from "./TopNavigationBar.css";
import icons from './../duckyIcons.css';
import Typography from "./../Typography";
import Avatar from "./../Avatar";

function getNotificationCounter(number) {
    if (number === 0) {
        return (<i className={`zmdi zmdi-notifications-none ${styles.rightIcon}`}/>);
    }else if (number < 10) {
        return (<i className={`zmdi zmdi-Ingress_Normal ${styles.notificationNumber} ${styles.rightIcon}`}>{number}</i>);
    }else{
        return (<i className={`zmdi zmdi-Ingress_Normal ${styles.notificationNumber} ${styles.rightIcon}`}>{"9+"}</i>);
    }
}

class TopNavigationBar extends React.Component {

    render() {
        return (
            <div className={styles.container}>
                <a onClick={this.props.onClickMenu}><i className={`zmdi zmdi-menu ${icons.duckyconMenu}`}/></a>
                <a onClick={this.props.onClickDucky}><img className={styles.logo} src="https://www.ducky.no/images/ducky-logo-no-padding.png"/></a>
                <Typography className={styles.split} type={"ingressNormal"}>{"|"}</Typography>
                <Typography className={styles.title} type={"ingressNormal"}>{this.props.title}</Typography>
                <a onClick={this.props.onClickProfile}><i className={`zmdi zmdi-account-circle ${styles.rightIcon}`}/></a>
                <a onClick={this.props.onClickProfile}><Avatar className={styles.rightIcon} size={"small"}/></a>
                <a onClick={this.props.onClickNotification}>{getNotificationCounter(this.props.notifications)}</a>
                <a onClick={this.props.onClickSearch}><i className={`zmdi zmdi-search ${styles.rightIcon}`}/></a>
            </div>
        );
    }
}

TopNavigationBar.displayName = "TopNavBar";
export default TopNavigationBar;