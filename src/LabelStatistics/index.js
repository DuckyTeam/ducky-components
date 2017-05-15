import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../Typography';
import Spacer from '../Spacer';
import classNames from 'classnames';
import styles from './styles.css';

function LabelStatistics(props) {
    let number = Number(props.statistics);

    if (number > 999 || number % 1 === 0) {
        number = number.toFixed(0);
        number = Number(number).toLocaleString();
    } else {
        number = number.toFixed(1);
    }

    return (
        <span>
            <div className={classNames(styles.wrapper, {[props.className]: props.className})}>
                <Typography
                    className={classNames(styles.number, {
                        [styles.darknumber]: props.theme === 'dark'})}
                    type={'display1'}
                >
                    {number}
                </Typography>
                <Spacer size={'standard'} />
                <Typography
                    className={classNames(styles.textcontent, {
                        [styles.darktextcontent]: props.theme === 'dark'})}
                    type={'bodyTextNormal'}
                >
                    {props.textcontent}
                </Typography>
            </div>
        </span>
  );
}
LabelStatistics.propTypes = {
    className: PropTypes.string,
    statistics: PropTypes.string,
    textcontent: PropTypes.string,
    theme: PropTypes.oneOf(['light', 'dark'])
};

export default LabelStatistics;
