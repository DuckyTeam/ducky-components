import React from 'react';
import styles from './styles.css';

function Header(props) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>{props.title}</div>
            {props.subTitle ? <div className={styles.subTitle}>{props.subTitle}</div> : null}
            {props.children}
        </div>
    );
}

Header.propTypes = {
    children: React.PropTypes.node,
    subTitle: React.PropTypes.string,
    title: React.PropTypes.string
};

export default Header;
