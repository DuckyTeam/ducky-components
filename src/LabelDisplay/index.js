import React from 'react';
import {PropTypes} from 'react';
import classNames from 'classnames';
import styles from './styles.css';
import Typography from '../Typography';
import Icon from '../Icon';
import Counter from '../Counter';

function LabelDisplay(props) {
    return (
        <div className={classNames(styles.wrapper, {[props.className]: props.className})}>
            <Typography
                className={classNames(styles.label, {
                    [styles.labelDarkTheme]: props.theme === 'dark'
                })}
                type="bodyTextNormal"
            >
                {props.label}
            </Typography>
            <div className={styles.valueWrapper}>
                <Icon
                    className={styles.icon}
                    icon={props.icon}
                    size="standard"
                    style={{color: props.iconColor}}
                />
                <Typography
                    className={classNames(styles.value, {
                        [styles.valueDarkTheme]: props.theme === 'dark'
                    })}
                    type="display1"
                >
                    {typeof props.value === 'number'
                    ? <Counter
                        decimals={2}
                        number={props.value}
                      />
                    : props.value}
                </Typography>
            </div>
        </div>
    );
}

LabelDisplay.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string,
    iconColor: PropTypes.string,
    label: PropTypes.string,
    theme: PropTypes.oneOf(['dark', 'light']),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default LabelDisplay;
