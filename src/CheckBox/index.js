import React from 'react';
import PropTypes from 'prop-types';
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
    checked: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func
};

export default CheckBox;
