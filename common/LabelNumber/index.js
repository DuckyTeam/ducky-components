import React from 'react';
import Typography from '../Typography';
import classNames from 'classnames';
import styles from './LabelNumber.css';
const PropTypes = React.PropTypes;

function LabelNumber(props) {
    return(
      <span>
        <div className={classNames(styles.wrapper, {[props.className]: props.className})}>
        <Typography type= {'ingressStrong'}
                    className={classNames(styles.number , {[styles.darknumber]: props.bgcolor === 'darkbg' })}>
                {props.number}
        </Typography>
        <br/>
        <Typography type= {'caption2Normal'}
                    className={classNames(styles.textcontent , {[styles.darktextcontent]: props.bgcolor === 'darkbg' })} >
                {props.textcontent}
        </Typography>
        </div>
      </span>
  );
}
LabelNumber.propTypes = {
  number: React.PropTypes.number,
  textcontent: React.PropTypes.string,
  className: React.PropTypes.string,
  bgcolor: React.PropTypes.string
};

export default LabelNumber;
