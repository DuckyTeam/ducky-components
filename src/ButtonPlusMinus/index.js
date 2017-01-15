import React from 'react';
import classNames from 'classnames';
import ButtonMini from '../ButtonMini';
import styles from './styles.css';

function ButtonPlusMinus(props) {
  return (
    <div
      className={classNames(styles.wrapper, {
        [styles.largerPlusMinus]: props.larger,
        [styles.inactive]: props.inactive,
        [props.className]: props.className
      })}
      onClick={!props.inactive && props.onClick}
      >
      <ButtonMini
        className={props.larger ? styles.iconLarger : null}
        icon={props.operator === "plus" ? "icon-add" : "icon-remove"}
        larger={props.larger}
        />
    </div>
  );
}

ButtonPlusMinus.propTypes = {
  className: React.PropTypes.string,
  inactive: React.PropTypes.bool,
  larger: React.PropTypes.bool,
  onClick: React.PropTypes.func,
  operator: React.PropTypes.oneOf(['plus', 'remove'])
};

export default ButtonPlusMinus;
