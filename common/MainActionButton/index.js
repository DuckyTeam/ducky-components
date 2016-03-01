import Icon from '../Icon';
import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';

function MainActionButton(props) {
    return (
        <div
            className={classNames(styles.wrapper, {
                [props.className]: props.className,
                [props.icon]: props.icon
            })}
            onClick={props.onClick}
        >
            <Icon size="standard" />
        </div>
    );
}

MainActionButton.propTypes = {
    className: React.PropTypes.string,
    icon: React.PropTypes.string,
    onClick: React.PropTypes.func
};

export default MainActionButton;
