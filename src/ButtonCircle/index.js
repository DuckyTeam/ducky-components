import React from 'react';
import {PropTypes} from 'react';
import classNames from 'classnames';
import Typography from '../Typography';
import styles from './styles.css';

function ButtonCircle(props) {
    return (
        <div className={classNames(styles.wrapper, {[props.className]: props.className})}>
            <Typography
                className={styles.text}
                type="bodyTextNormal"
            >{props.children}</Typography>
        </div>
    );
}

ButtonCircle.propTypes = {
    children: PropTypes.string,
    className: PropTypes.string
};

export default ButtonCircle;
