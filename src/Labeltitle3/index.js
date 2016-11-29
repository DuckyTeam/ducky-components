import React from 'react';
import {PropTypes} from 'react';
import classNames from 'classnames';
import styles from './styles.css';
import Typography from '../Typography';
import Icon from '../Icon';

function labelTitle3(props) {
  return (
    <span className={classNames(styles.wrapper, {[props.className]: props.className})}>
      <Icon
        className={styles.icon}
        icon={props.icon}
        size="mini"
        style={props.style}
        />
      <Typography
        className={styles.label}
        type="caption2Normal"
        >
        {props.label}
      </Typography>
    </span>
    );
}

labelTitle3.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  style: React.PropTypes.shape({}),
  label: PropTypes.string
};

export default labelTitle3;
