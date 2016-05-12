import React from 'react';
import Icon from '../Icon';
import classNames from 'classnames';
import styles from './styles.css';

function CheckBox(props) {
    return (
      <div
          className={classNames(styles.default,
            {[styles.checked]: props.checked}, {[props.className]: props.className})}
          onClick={props.onClick}
      >
      <Icon
          icon={props.checked ? "icon-check_box" : "icon-check_box_outline_blank"}
          size={"standard"}
      />
  </div>
);
}


CheckBox.propTypes = {
    className: React.PropTypes.string,
    onClick: React.PropTypes.func,
    checked: React.PropTypes.bool
};

export default CheckBox;
