import LabelSmall from '../LabelSmall';
import React from 'react';
import Time from '../TimeStamp';
import styles from './LabelPair.css';
const PropTypes = React.PropTypes;

function LabelPair(props) {
    if (props.pairing === 'time-points') {
        return (
            <span>
                <Time
                    dateTime={"2016-03-01 14:42:48"}
                    short={Boolean(true)}
                />
                <span className={styles.pad}>
                    <LabelSmall
                        content={props.points}
                        icon={'zmdi zmdi-favorite'}
                        onClick={props.onClick}
                        type={"caption2Normal"}
                    />
                </span>
            </span>
        );
    }

    return (
        <span>
            <LabelSmall
                content={props.points}
                icon={'zmdi zmdi-favorite'}
                onClick={props.onClick}
                type={"caption2Normal"}
            />
            <span className={styles.pad}>
                <LabelSmall
                    content={props.co2}
                    icon={'zmdi zmdi-favorite'}
                    onClick={props.onClick}
                    type={"caption2Normal"}
                />
            </span>
        </span>
    );
}

LabelPair.displayName = 'LabelPair';
LabelPair.propTypes = {
    co2: PropTypes.number,
    onClick: PropTypes.func,
    pairing: PropTypes.oneOf(['time-points', 'pionts-co2']),
    points: PropTypes.number
};
export default LabelPair;
