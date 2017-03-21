import React from 'react';
import {PropTypes} from 'react';
import classNames from 'classnames';
import styles from './styles.css';
import WrapperStyles from '../Wrapper/styles.css';
import TypographyStyles from '../Typography/styles.css';
import Typography from '../Typography';

function Input(props) {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className={classNames(styles.wrapper, {[props.className]: props.className})}>
      <input
        autoFocus={props.autoFocus}
        className={classNames(styles.input, TypographyStyles.bodyTextNormal, WrapperStyles.short, {
          [styles.error]: props.errorMessage || props.error
        })}
        name={props.name}
        onBlur={props.onBlur}
        onChange={props.onChange}
        placeholder={capitalizeFirstLetter(props.placeholder)}
        type={props.inputType}
        value={props.value}
        />
      <Typography
        className={classNames(styles.errorMessage, {
          [styles.errorMessageActive]: props.errorMessage
        })}
        type="bodyTextNormal"
        >
        {props.errorMessage}
      </Typography>
    </div>
  );
}

Input.propTypes = {
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.node,
  inputType: PropTypes.string,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string
};

export default Input;
