import React from 'react';
import classNames from 'classnames';
import ButtonMini from '../ButtonMini';
import styles from './styles.css';

function ButtonPlusminus(props) {
  return (
    <div
      className={classNames(styles.wrapper, {
        [styles.inactive]: props.inactive,
        [props.className]: props.className
      })}
      onClick={!props.inactive && props.onClick}
      >
      <ButtonMini
        icon={props.operator === "plus" ? "icon-add" : "icon-remove"}
        />
    </div>
  );
}

ButtonPlusminus.propTypes = {
  className: React.PropTypes.string,
  icon: React.PropTypes.string,
  inactive: React.PropTypes.bool,
  onClick: React.PropTypes.func,
  operator: React.PropTypes.oneOf(['plus', 'remove'])
};

export default ButtonPlusminus;
