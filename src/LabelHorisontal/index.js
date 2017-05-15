import Icon from '../Icon';
import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../Typography';
import classNames from 'classnames';
import styles from './styles.css';


function LabelHorisontal(props) {
    return (
        <div className={classNames(styles.wrapper, {[props.className]: props.className})}>
            <Icon
                className={classNames(
                    styles.icon,
                    {[styles.pointsIcon]: props.icon === 'icon-brightness_high'},
                    {[styles.co2Icon]: props.icon === 'icon-leaf'}
                )}
                icon={props.icon}
                size={'standard'}
            />
            <Typography
                className={classNames(styles.text, {
                    [styles.textDarkTheme]: props.theme === 'dark'
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
    text: PropTypes.node,
    theme: PropTypes.string
};

export default LabelHorisontal;
