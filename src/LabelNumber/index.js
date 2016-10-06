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
                        [styles.darknumber]: props.theme === 'dark'})}
                    type="ingressStrong"
                >
                    {props.animation
                    ? <Counter
                        decimals={props.decimals}
                        number={props.number}
                      />
                    : props.number}

                </Typography>
                <br />
                <Typography
                    className={classNames(styles.textcontent, {
                        [styles.darktextcontent]: props.theme === 'dark'})}
                    type="caption2Normal"
                >
                    {props.textcontent}
                </Typography>
            </div>
        </span>
  );
}
LabelNumber.propTypes = {
    animation: React.PropTypes.bool,
    className: React.PropTypes.string,
    decimals: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
    number: React.PropTypes.number,
    textcontent: React.PropTypes.string,
    theme: React.PropTypes.oneOf(['light', 'dark'])
};

export default LabelNumber;
