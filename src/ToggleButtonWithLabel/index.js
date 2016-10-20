import React from 'react';
import classNames from 'classnames';
import Typography from '../Typography';
import SwitchToggleButton from '../SwitchToggleButton';
import styles from './styles.css';
const PropTypes = React.PropTypes;

function ToggleButtonWithLabel(props) {
  return (
    <div className={classNames(styles.wrapper)}>
      <Typography
        className={classNames(styles.text, {
          [styles.textDarkTheme]: props.theme === 'dark'
        })}
        type="bodyTextNormal"
        >
          {props.text}
      </Typography>
      <SwitchToggleButton
        checked={props.checked}
        theme={props.theme}
        />
    </div>
  );
}
ToggleButtonWithLabel.propTypes = {
  checked: PropTypes.bool,
  text: PropTypes.string,
  theme: PropTypes.string
};
export default ToggleButtonWithLabel;
