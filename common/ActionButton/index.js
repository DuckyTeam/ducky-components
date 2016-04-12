import Icon from '../Icon';
import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';

function ActionButton(props) {
    return (
        <div
            className={classNames(styles.wrapper, {
                [styles[props.size]]: props.size,
                [props.className]: props.className
            })}
            onClick={props.onClick}
        >
            <Icon
                className={styles.icon}
                icon={props.icon}
                size="standard"
            />
        </div>
    );
}

ActionButton.propTypes = {
    className: React.PropTypes.string,
    icon: React.PropTypes.string,
    onClick: React.PropTypes.func,
    size: React.PropTypes.oneOf(['standard', 'main'])
};

export default ActionButton;
