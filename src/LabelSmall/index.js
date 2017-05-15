import Icon from '../Icon';
import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../Typography';
import styles from './styles.css';
import classNames from 'classnames';


function LabelSmall(props) {
  return (
    <span className={classNames(styles.wrapper, {[props.className]: props.className})}>
      <Icon
        className={classNames(styles.pad, props.iconClass, {
          [styles.pointsIcon]: props.icon === 'icon-brightness_high',
          [styles.co2Icon]: props.icon === 'icon-leaf'
        })}
        icon={props.icon}
        onClick={props.onClick}
        size={'micro'}
        />
      <Typography className={props.typhographyClass} type={props.typographyType || 'caption2Normal'}>{props.content}</Typography>
    </span>
  );
}

LabelSmall.displayName = 'LabelSmall';
LabelSmall.propTypes = {
  className: PropTypes.string,
  content: PropTypes.node,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  typographyType: PropTypes.string,
  typhographyClass: PropTypes.string,
  iconClass: PropTypes.string
};
export default LabelSmall;
