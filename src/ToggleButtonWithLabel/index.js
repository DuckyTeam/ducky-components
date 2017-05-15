import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Typography from '../Typography';
import SwitchToggleButton from '../SwitchToggleButton';
import styles from './styles.css';


function ToggleButtonWithLabel(props) {
  return (
    <div className={classNames(styles.wrapper)}>
      <Typography
        className={classNames(styles.text, {
          [styles.textDarkTheme]: props.theme === 'dark'
        })}
        type="bodyTextNormal"
        >
        {props.label}
      </Typography>
      <SwitchToggleButton
        onChange={props.onChange}
        checked={props.checked}
        defaultChecked={props.defaultChecked}
        theme={props.theme}
        />
    </div>
  );
}
ToggleButtonWithLabel.propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.string,
  theme: PropTypes.string
};
export default ToggleButtonWithLabel;
