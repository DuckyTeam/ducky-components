import React from 'react';
import styles from './styles.css';
import classNames from 'classnames';
import Typography from '../Typography';
import Icon from '../Icon';

function LabelFooterAction(props) {
    if (props.children) {
        return (
            <span
              className={classNames(styles.iconWrapper, {[props.className]: props.className})}
              onClick={props.onClick}>
              <Icon icon={props.icon} size={'standard'}/>
              <Typography type={'caption2Normal'} className={styles.value}>{props.children}</Typography>
          </span>
      );
    }

    return (
        <Icon
          icon={props.icon}
          onClick={props.onClick}
          size={'standard'}
          className={classNames(styles.icon, {[props.className]: props.className})}/>
    );
}

LabelFooterAction.propTypes = {
    children: React.PropTypes.number,
    icon: React.PropTypes.string,
    onClick: React.PropTypes.func,
    className: React.PropTypes.object
};

export default LabelFooterAction;
