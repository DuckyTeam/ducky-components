import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';
const PropTypes = React.PropTypes;

function SwitchToggleButton(props) {
    return (
        <label className={classNames(styles.groove, {
            [styles.darkgroove]: props.theme === 'dark'}, {
                [props.className]: props.className
            })}
        >
            <input checked={props.checked ? "checked" : null}
                type="checkbox"
            />
            <div className={classNames(styles.slider, {
                [styles.darkslider]: props.theme === 'dark'}, {
                    [props.className]: props.className
                })}
                onClick={props.onClick}
            />
        </label>
    );
}

SwitchToggleButton.propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func,
    theme: PropTypes.string
};

export default SwitchToggleButton;
