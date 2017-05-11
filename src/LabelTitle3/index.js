import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import styles from './styles.css';
import Typography from '../Typography';
import Icon from '../Icon';

function LabelTitle3(props) {
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

LabelTitle3.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  label: PropTypes.string,
  style: PropTypes.shape({})
};

export default LabelTitle3;
