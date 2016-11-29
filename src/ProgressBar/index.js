import React from 'react';
import {PropTypes} from 'react';
import styles from './styles.css';
import classNames from 'classnames';

function ProgressBar(props) {
  const optBackground = (
    <div
     className={classNames(styles.inactive, {
       [styles[props.size]]: props.size}
      )}
     />

  );

  return (
    <div
      className={classNames(styles.wrapper, {
        [styles[props.size]]: props.size,
        [props.className]: props.className}
        )}
      onClick={props.onClick}
      >
       {(props.percent > 0) ?
         <div
           className={classNames(styles.progress, {
             [styles[props.size]]: props.size}
            )}
           style={{width: `${props.percent}%`, backgroundColor: props.color}}
           />
        : optBackground}
    </div>
  );
}

ProgressBar.propTypes = {
  className: PropTypes.string,
  color: React.PropTypes.shape({}),
  onClick: PropTypes.func,
  percent: PropTypes.number,
  size: PropTypes.oneOf(['standard', 'wide'])
};

export default ProgressBar;
