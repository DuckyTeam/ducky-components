import React from 'react';
import {PropTypes} from 'react';
import classNames from 'classnames';
import styles from './styles.css';
import Typography from '../Typography';
import Icon from '../Icon';

function LabelIcon(props) {
    return (
        <div className={classNames(styles.wrapper, {[props.className]: props.className})}>
            <Icon
                className={styles.icon}
                icon={props.icon}
                size="standard"
            />
            <Typography
                className={classNames(styles.value, {
                    [styles.valueDarkTheme]: props.theme === 'dark'
                })}
                type="display1"
            >
                {props.text}
            </Typography>
        </div>
    );
}

LabelIcon.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string,
    label: PropTypes.string,
    text: PropTypes.string,
    theme: PropTypes.oneOf(['dark', 'light'])
};

export default LabelIcon;
