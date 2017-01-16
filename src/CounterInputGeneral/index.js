import React from 'react';
import styles from './styles.css';
import ButtonPlusMinus from '../ButtonPlusMinus';
import Typography from '../Typography';
const PropTypes = React.PropTypes;

function CounterInputGeneral(props) {
  return (
    <div className={styles.wrapper
    } >
      <Typography
        className={styles.labelText}
        type={'bodyTextNormal'}
        >
        {props.label}
      </Typography>
      <Typography
        className={`${props.value === 0 ? styles.valueTextMuted : styles.valueText}`}
        type={'bodyTextNormal'}
        >
        {props.value}
      </Typography>
      <ButtonPlusMinus
        className={styles.minus}
        inactive={props.value === 0}
        large={props.large}
        onClick={props.decreaseValue}
        operator={'remove'}
        />
      <ButtonPlusMinus
        className={styles.plus}
        large={props.large}
        onClick={props.increaseValue}
        operator={'plus'}
        />
    </div>
  );
}

CounterInputGeneral.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  decreaseValue: PropTypes.func,
  increaseValue: PropTypes.func,
  label: PropTypes.string,
  large: PropTypes.bool,
  value: PropTypes.node
};

export default CounterInputGeneral;
