import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.css';


function SwitchToggleButton(props) {
  return (
    <label className={classNames(styles.groove, {
      [styles.darkgroove]: props.theme === 'dark'}, {
        [props.className]: props.className
      })}>
      <input
        checked={props.checked}
        defaultChecked={props.defaultChecked}
        onChange={props.onChange}
        type="checkbox"
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
  className: PropTypes.string,
  defaultChecked: PropTypes.bool,
  onChange: PropTypes.func,
  theme: PropTypes.oneOf(['light', 'dark'])
};

export default SwitchToggleButton;
