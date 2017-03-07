import React from 'react';
import Icon from '../Icon';
import classNames from 'classnames';
import styles from './styles.css';

function LabelExpandCollapse(props) {
  return (
    props.expanded
    ? <div className={classNames({
      [props.className]: props.className
    })}
      onClick={props.onClick}
      >
      {props.children}
      <div className={styles.wrapper}>
        <Icon
          className={styles.active}
          icon={'icon-keyboard_arrow_up'}
          size={'standard'}
          />
      </div>
    </div>
    : <div className={classNames(styles.wrapper, {
      [props.className]: props.className
    })}
      onClick={props.onClick}
      >
      <Icon
        className={styles.inactive}
        icon={'icon-list'}
        size={'standard'}
        />
    </div>
  );
}

LabelExpandCollapse.propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  expanded: React.PropTypes.bool,
  onClick: React.PropTypes.func
};

export default LabelExpandCollapse;
