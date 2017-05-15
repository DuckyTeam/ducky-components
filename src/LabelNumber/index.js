import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../Typography';
import classNames from 'classnames';
import styles from './styles.css';
import Counter from '../Counter';

function LabelNumber(props) {
    return (
        <span className={styles.span}>
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
    animation: PropTypes.bool,
    className: PropTypes.string,
    decimals: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    number: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    textcontent: PropTypes.string,
    theme: PropTypes.oneOf(['light', 'dark'])
};

export default LabelNumber;
