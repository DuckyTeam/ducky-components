import React from 'react';
import Icon from '../Icon';
import classNames from 'classnames';
import styles from './styles.css';

function CheckBox(props) {
    return (
        <div
            className={classNames(styles.default,
                {[styles.checked]: props.checked}, {[props.className]: props.className})}
            onClick={props.onClick}
        >
            <Icon
                icon={props.checked ? "icon-check_box" : "icon-check_box_outline_blank"}
                size={"standard"}
            />
        </div>
    );
}


CheckBox.propTypes = {
    checked: React.PropTypes.bool,
    className: React.PropTypes.string,
    onClick: React.PropTypes.func
};

export default CheckBox;
