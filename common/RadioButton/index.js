import React from 'react';
import Icon from '../Icon';
import classNames from 'classnames';
import styles from './styles.css';

function RadioButton(props) {
    return (
        <div
            className={classNames(styles.default,
                {[styles.checked]: props.checked}, {[props.className]: props.className})}
            onClick={props.onClick}
        >
            <Icon
                icon={props.checked ? "icon-radio_button_checked" : "icon-radio_button_unchecked"}
                size={"standard"}
            />
        </div>
    );
}


RadioButton.propTypes = {
    checked: React.PropTypes.bool,
    className: React.PropTypes.string,
    onClick: React.PropTypes.func
};

export default RadioButton;
