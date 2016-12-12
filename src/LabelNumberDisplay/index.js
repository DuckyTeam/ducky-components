import React from 'react';
import Icon from '../Icon';
import Typography from '../Typography';
import classNames from 'classnames';
import styles from './styles.css';

const PropTypes = React.PropTypes;

function LabelNumberDisplay(props) {
  return (
    <div className={styles.outerWrapper}>
      <Icon
        className={styles.icon}
        icon={props.icon || 'icon-leaf'}
        size={'standard'}
        style={{color: props.color ? props.color : '#00ab97'}}
        />
      <Typography
        className={classNames(styles.value, {[styles.valueDark]: props.theme === 'dark'})}
        type={'display1'}
        >
        {props.value}
      </Typography>
      <Typography
        className={classNames(styles.label, {[styles.labelDark]: props.theme === 'dark'})}
        type={'bodyTextNormal'}
        >{props.label}</Typography>
    </div>
  );
}

LabelNumberDisplay.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  label: PropTypes.string,
  theme: PropTypes.string,
  value: PropTypes.number
};

export default LabelNumberDisplay;
