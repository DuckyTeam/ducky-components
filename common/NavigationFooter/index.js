import React from 'react';
import {PropTypes} from 'react';
import styles from './styles.css';
import classNames from 'classnames';

function NavigationFooter(props) {
    return (
        <div className={classNames(styles.wrapper, {[props.className]: props.className})}>
            <div className={styles.buttonWrapper}>
                <button className={styles.button}>
                    {"Avbryt"}
                </button>
                <button className={styles.button}>
                    {"Publiser"}
                </button>
            </div>
        </div>
    );
}

NavigationFooter.propTypes = {
    className: PropTypes.string
};

export default NavigationFooter;
