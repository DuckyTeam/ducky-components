import React from 'react';
import Typography from '../Typography';
import Spacer from '../Spacer';
import classNames from 'classnames';
import styles from './styles.css';

function LabelStatistics(props) {
    return (
        <span>
            <div className={classNames(styles.wrapper, {[props.className]: props.className})}>
                <Typography
                    className={classNames(styles.number, {
                        [styles.darknumber]: props.bgcolor === 'darkbg'})}
                    type={'display1'}
                >
                    {props.statistics}
                </Typography>
                <Spacer size={'standard'} />
                <Typography
                    className={classNames(styles.textcontent, {
                        [styles.darktextcontent]: props.bgcolor === 'darkbg'})}
                    type={'bodyTextNormal'}
                >
                    {props.textcontent}
                </Typography>
            </div>
        </span>
  );
}
LabelStatistics.propTypes = {
    bgcolor: React.PropTypes.string,
    className: React.PropTypes.string,
    statistics: React.PropTypes.number,
    textcontent: React.PropTypes.string
};

export default LabelStatistics;
