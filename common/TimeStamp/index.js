import {isoString, timeSince} from './utils/time';
import LabelSmall from '../LabelSmall';
import React from 'react';
const PropTypes = React.PropTypes;

function TimeStamp(props) {
    return (
        <LabelSmall
            className={props.className}
            content={
                <time
                    dateTime={isoString(props.dateTime)}
                    style={Object.assign({}, props.style)}
                >
                    {timeSince(props.dateTime, props.short)}
                </time>
            }
            icon={'icon-schedule'}
            type={'caption2Normal'}
        />
    );
}

TimeStamp.displayName = 'TimeStamp';
TimeStamp.propTypes = {
    dateTime: PropTypes.number,
    className: PropTypes.string,
    short: PropTypes.bool,
    style: PropTypes.shape({})
};
export default TimeStamp;
