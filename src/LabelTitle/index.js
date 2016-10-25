import Icon from '../Icon';
import React from 'react';
import Typography from '../Typography';
import Counter from '../Counter';
import classNames from 'classnames';
import styles from './styles.css';
const PropTypes = React.PropTypes;

function LabelTitle(props) {
  return (
    <div className={classNames(styles.wrapper, {[props.className]: props.className})}>
      <Icon
        className={props.size === 'small' ? styles.iconSmall : styles.iconLarge}
        icon={props.icon}
        size={props.size === 'small' ? 'small' : 'large1'}
        />
        {props.animation
        ? <Counter
          decimals={props.decimals}
          number={props.number}
          />
        : <Typography
          className={styles.text}
          type={props.size === 'small' ? 'ingressTitle' : 'display1'}
          >
          {props.text}
        </Typography>}
    </div>
  );
}

LabelTitle.propTypes = {
  animation: PropTypes.bool,
  className: PropTypes.string,
  decimals: PropTypes.number,
  icon: PropTypes.string,
  number: PropTypes.number,
  size: PropTypes.oneOf(['small', 'large']),
  text: PropTypes.node
};

export default LabelTitle;
