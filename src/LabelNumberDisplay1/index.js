import React from 'react';
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
          {props.captionNumber}
        </Typography>
      </div>
      <Spacer size="standard" />
      <Typography
        className={classNames(styles.innerText, {[styles.darkCo2]: props.theme === 'dark'})}
        type="bodyTextNormal"
        >
        {props.captionCo2}
      </Typography>
    </div>
  );
}

LabelNumberDisplay1.propTypes = {
  captionCo2: React.PropTypes.string,
  captionNumber: React.PropTypes.string,
  className: React.PropTypes.string,
  icon: React.PropTypes.string,
  theme: React.PropTypes.string
};

export default LabelNumberDisplay1;
