import React from "react";
import styles from "./TopNavigationBar.css";

class TopNavigationBar extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <i className={`zmdi zmdi-menu ${styles.menuIcon}`}/>
                <img className={styles.logo} src="https://www.ducky.no/images/ducky-logo-no-padding.png"/>
                <p className={`zmdi zmdi-Ingress_Normal ${styles.split}`}>{"|"}</p>
                <p className={`zmdi zmdi-Ingress_Normal ${styles.title}`}>{"Tittel"}</p>
                <i className={`zmdi zmdi-account-circle ${styles.rightIcon}`}/>
                <i className={`zmdi zmdi-notifications-none ${styles.rightIcon}`}/>
                <i className={`zmdi zmdi-search ${styles.rightIcon}`}/>
            </div>
        );
    }
}

TopNavigationBar.displayName = "TopNavBar";
export default TopNavigationBar;
