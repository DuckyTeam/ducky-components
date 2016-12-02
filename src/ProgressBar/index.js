import React from 'react';
import {PropTypes} from 'react';
import styles from './styles.css';
import classNames from 'classnames';

function ProgressBar(props) {
  const optBackground = (
    <div
      className={classNames(styles.inactive, styles[props.size])}
      />
  );

  return (
    <div
      className={classNames(styles.wrapper, props.className, styles[props.size])}
      onClick={props.onClick}
      >
      <div className={styles.progressWrapper}>
      {(props.percent > 0)
        ? <div
          className={classNames(styles.progress, styles[props.size])}
          style={{width: `${props.percent}%`, backgroundColor: props.color}}
          >
        </div>
       : optBackground}
      </div>
      {props.children}
    </div>
  );
}

ProgressBar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: React.PropTypes.string,
  onClick: PropTypes.func,
  percent: PropTypes.number,
  size: PropTypes.oneOf(['standard', 'wide'])
};

export default ProgressBar;
