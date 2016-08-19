import React from 'react';
import Typography from '../Typography';
import classNames from 'classnames';
import styles from './styles.css';
import Counter from '../Counter';

function LabelNumber(props) {
    return (
        <span>
            <div className={classNames(styles.wrapper, {[props.className]: props.className})}>
                <Typography
                    className={classNames(styles.number, {
                        [styles.darknumber]: props.bgcolor === 'darkbg'})}
                    type={'ingressStrong'}
                >
                    {props.animation
                    ? <Counter number={Number(props.number)} />
                    : props.number}

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
    animation: React.PropTypes.bool,
    bgcolor: React.PropTypes.string,
    className: React.PropTypes.string,
    number: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
    textcontent: React.PropTypes.string
};

export default LabelNumber;
