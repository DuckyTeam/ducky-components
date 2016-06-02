import React from 'react';
import {PropTypes} from 'react';
import classNames from 'classnames';
import styles from './styles.css';
import Typography from '../Typography';
import Icon from '../Icon';

function LabelTab(props) {
    return (
        <span className={classNames(styles.wrapper, {[props.className]: props.className})}>
            <Icon
                className={styles.icon}
                icon={props.icon}
                size="standard"
            />
            <Typography
                className={styles.label}
                type="button"
            >
                {props.label}
            </Typography>
        </span>
    );
}

LabelTab.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string,
    label: PropTypes.string
};

export default LabelTab;
