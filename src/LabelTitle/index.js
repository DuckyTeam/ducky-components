import Icon from '../Icon';
import React from 'react';
import Typography from '../Typography';
import Counter from '../Counter';
import classNames from 'classnames';
import styles from './styles.css';
const PropTypes = React.PropTypes;

function getTypographyType(size) {
  switch (size) {
  case 'small':
    return 'ingressTitle';
  case 'regular':
    return 'bodyTextNormal';
  default:
    return 'display1';
  }
}

function getIconSize(size) {
  switch (size) {
  case 'small':
    return 'small';
  case 'regular':
    return 'small';
  default:
    return 'large1';
  }
}

function LabelTitle(props) {
  return (
    <div className={classNames(styles.wrapper, {[props.className]: props.className})}>
      <Icon
        className={props.size === 'small' ? styles.iconSmall : styles.iconLarge}
        icon={props.icon}
        size={getIconSize(props.size)}
        />
      <Typography
        className={styles.text}
        type={getTypographyType(props.size)}
        >
          {props.animation
          ? <Counter
            decimals={props.decimals}
            number={props.number}
            />
          : props.text
          }
      </Typography>
    </div>
  );
}

LabelTitle.propTypes = {
  animation: PropTypes.bool,
  className: PropTypes.string,
  decimals: PropTypes.number,
  icon: PropTypes.string,
  number: PropTypes.number,
  size: PropTypes.oneOf(['regular', 'small', 'large']),
  text: PropTypes.node
};

export default LabelTitle;
