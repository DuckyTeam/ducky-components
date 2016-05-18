import React from 'react';
import Typography from '../Typography';
import classNames from 'classnames';
import styles from './LabelNumber.css';

function LabelNumber(props) {
    return (
        <span>
            <div className={classNames(styles.wrapper, {[props.className]: props.className})}>
                <Typography
                    className={classNames(styles.number, {
                        [styles.darknumber]: props.bgcolor === 'darkbg'})}
                    type={'ingressStrong'}
                >
                    {props.number}
                </Typography>
                <br />
                <Typography
                    className={classNames(styles.textcontent, {
                        [styles.darktextcontent]: props.bgcolor === 'darkbg'})}
                    type={'caption2Normal'}
                >
                    {props.textcontent}
                </Typography>
            </div>
        </span>
  );
}
LabelNumber.propTypes = {
    bgcolor: React.PropTypes.string,
    className: React.PropTypes.string,
    number: React.PropTypes.number,
    textcontent: React.PropTypes.string
};

export default LabelNumber;
