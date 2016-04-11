import React from 'react';
import {PropTypes} from 'react';
import styles from './styles.css';
import Icon from '../Icon';
import classNames from 'classnames';

function IconDropdown(props) {
    return (
        <div
            className={classNames(styles.wrapper, {
                [props.className]: props.className
            })}
            onClick={props.onClick}
        >
            <Icon
                icon={props.icon}
                size="standard"
            />
            <Icon
                icon="icon-arrow_drop_down"
                size="standard"
            />
        </div>
    );
}

IconDropdown.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string,
    onClick: PropTypes.func
};

export default IconDropdown;
