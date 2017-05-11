import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icon';
import Spacer from '../Spacer';
import Typography from '../Typography';
import styles from './styles.css';

function LabelNumberDisplay1(props) {
  return (
    <div
      className={classNames(styles.wrapper, {
        [props.className]: props.className
      })}
      >
      <div className={styles.innerWrap}>
        <Icon
          className={classNames(styles.icon)}
          icon={props.icon}
          size="standard"
          />
        <Typography
          className={classNames(styles.number, {[styles.darkNumber]: props.theme === 'dark'})}
          type="display1"
          >
          {props.number}
        </Typography>
      </div>
      <Spacer size="standard" />
      <Typography
        className={classNames(styles.innerText, {[styles.darkCo2]: props.theme === 'dark'})}
        type="bodyTextNormal"
        >
        {props.caption}
      </Typography>
    </div>
  );
}

LabelNumberDisplay1.propTypes = {
  caption: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.string,
  number: PropTypes.node,
  theme: PropTypes.string
};

export default LabelNumberDisplay1;
