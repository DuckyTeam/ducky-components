import Icon from '../Icon';
import React from 'react';
import Typography from '../Typography';
import classNames from 'classnames';
import styles from './styles.css';
const PropTypes = React.PropTypes;

function LabelHorisontal(props) {
    return (
        <div className={classNames(styles.wrapper, {[props.className]: props.className})}>
            <Icon
                className={styles.icon}
                icon={props.icon}
                size={'standard'}
            />
            <Typography
                className={classNames(styles.value, {
                    [styles.valueDarkTheme]: props.theme === 'dark'
                })}
                type="bodyTextNormal"
            >
                {props.text}
            </Typography>
        </div>
    );
}

LabelHorisontal.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string,
    text: PropTypes.number,
    theme: PropTypes.string
};

export default LabelHorisontal;
