import LabelSmall from '../LabelSmall';
import React from 'react';
import Time from '../TimeStamp';
import styles from './LabelPair.css';
const PropTypes = React.PropTypes;

function LabelPair(props) {
    if (props.co2) {
        return (
            <span>
                <LabelSmall
                    content={props.points}
                    icon={'icon-brightness_high'}
                    onClick={props.onClick}
                    type={"caption2Strong"}
                />
                <span className={styles.pad}>
                    <LabelSmall
                        content={props.co2}
                        icon={'icon-leaf'}
                        onClick={props.onClick}
                        type={"caption2Strong"}
                    />
                </span>
            </span>
        );
    }

    return (
        <span>
            <Time
                dateTime={"2016-03-04 09:30:00"}
                short={Boolean(true)}
            />
            <span className={styles.pad}>
                <LabelSmall
                    content={props.points}
                    icon={'icon-brightness_high'}
                    onClick={props.onClick}
                    type={"caption2Strong"}
                />
            </span>
        </span>
    );
}

LabelPair.displayName = 'LabelPair';
LabelPair.propTypes = {
    co2: PropTypes.number,
    onClick: PropTypes.func,
    points: PropTypes.number
};
export default LabelPair;
