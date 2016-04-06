import React from 'react';
import classNames from 'classnames';
import styles from './LogButton.css';
import Icon from './../Icon';

function LogButton(props) {
    return (
        <div
            className={classNames(styles.wrapper, {
                [styles.checked]: props.checked,
                [props.className]: props.className
            })}
            onClick={props.onClick}
        >
            <Icon
                icon={"icon-check"}
                size={"standard"}
            />
        </div>
    );
}

LogButton.propTypes = {
    checked: React.PropTypes.bool,
    className: React.PropTypes.string,
    onClick: React.PropTypes.func
};

export default LogButton;
