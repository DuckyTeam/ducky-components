import React from 'react';
import Typography from '../Typography';
import classNames from 'classnames';
import styles from './styles.css';
const PropTypes = React.PropTypes;

function LeaderboardHeader(props) {
    return (
        <div className={classNames(styles.wrapper, {[props.className]: props.className})}>
            <Typography
                className={styles.text}
                type={'caption2Normal'}
            >
                {props.householdChallenge ? 'Husholdning' : 'Lagmedlem'}
            </Typography>
        </div>
    );
}

LeaderboardHeader.propTypes = {
    className: PropTypes.string,
    householdChallenge: PropTypes.bool,
    text: PropTypes.string
};

export default LeaderboardHeader;
