import React from 'react';
import PropTypes from 'prop-types';
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
    children: PropTypes.node,
    subTitle: PropTypes.string,
    title: PropTypes.string
};

export default Header;
