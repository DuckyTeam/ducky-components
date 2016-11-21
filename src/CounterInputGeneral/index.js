import React from 'react';
import classNames from 'classnames';
import ButtonPlusMinus from '../ButtonPlusMinus';
import Typography from '../Typography';
import styles from './styles.css';

function CounterInputGeneral(props) {
  return (
    <div className={classNames(styles.wrapper)}>
      <Typography
        className={classNames(
          styles.labelText,
        [props.className]: props.className)}
        type={'bodyTextNormal'}
        >
        {props.label}
      </Typography>
      <Typography
        className={classNames(
          props.resultNumber === 0 ? styles.counterTextMuted : '',
          [props.className]: props.className
        )}
        type={'bodyTextNormal'}
        >
        {props.resultNumber}
      </Typography>
      <ButtonPlusMinus
        className={classNames(styles.minus, [props.className]: props.className)}
        inactive={props.resultNumber === 0}
        onClick={props.decreaseValue}
        operator="remove"
        />
      <ButtonPlusMinus
        className={classNames(styles.plus, [props.className]: props.className)}
        inactive={props.inactivePositive}
        onClick={props.increaseValue}
        operator="plus"
        />
    </div>
      );
}

CounterInputGeneral.propTypes = {
  className: React.PropTypes.string,
  inactiveNegative: React.PropTypes.bool,
  inactivePositive: React.PropTypes.bool,
  label: React.PropTypes.string,
  decreaseValue: React.PropTypes.func,
  increaseValue: React.PropTypes.func,
  operator: React.PropTypes.oneOf(['plus', 'remove']),
  resultNumber: React.PropTypes.string
};

export default CounterInputGeneral;
