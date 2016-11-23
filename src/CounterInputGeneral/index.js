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
        <span className={styles.unitsText}>{props.units}</span>
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
  decreaseValue: React.PropTypes.func,
  inactiveNegative: React.PropTypes.bool,
  inactivePositive: React.PropTypes.bool,
  increaseValue: React.PropTypes.func,
  label: React.PropTypes.string,
  operator: React.PropTypes.oneOf(['plus', 'remove']),
  resultNumber: React.PropTypes.string,
  units: React.PropTypes.string
};

export default CounterInputGeneral;
