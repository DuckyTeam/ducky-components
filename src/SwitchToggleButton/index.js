import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';
const PropTypes = React.PropTypes;

function SwitchToggleButton(props) {
  return (
        <label className={classNames(styles.groove, {
          [styles.darkgroove]: props.theme === 'dark'}, {
            [props.className]: props.className
          })}>
          <input
            checked={props.checked}
            defaultChecked={props.defaultChecked}
            type="checkbox"
            onChange={props.onChange}
            />
          <div className={classNames(styles.slider, {
            [styles.darkslider]: props.theme === 'dark'}, {
              [props.className]: props.className
            })} />
        </label>
    );
}

SwitchToggleButton.propTypes = {
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func,
  theme: PropTypes.oneOf(['light', 'dark'])
};

export default SwitchToggleButton;
